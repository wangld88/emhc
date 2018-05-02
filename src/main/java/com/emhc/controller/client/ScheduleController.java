package com.emhc.controller.client;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.emhc.dto.StudentScheduleTest;
import com.emhc.error.Message;
import com.emhc.error.MessageHandler;
import com.emhc.model.Registration;
import com.emhc.model.Schedule;
import com.emhc.model.Session;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.service.EmailService;
import com.emhc.service.RegistrationService;
import com.emhc.service.ScheduleService;
import com.emhc.service.SessionService;
import com.emhc.service.UserService;

/**
 * 
 * @author dong.liu
 *
 */
@Controller
@RequestMapping("/client")
public class ScheduleController {
	private static final Logger logger = LoggerFactory.getLogger(ScheduleController.class);

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private RegistrationService registrationService;
	
	@Autowired
	private ScheduleService scheduleService;
	
	@Autowired
	private SessionService sessionService;
	
	@Autowired
	private MessageHandler messageHandler;

	
	@RequestMapping(value = { "/schedule" }, method = RequestMethod.GET)
	public String schedule(Model model) {
		String rtn = "/client/scheduleTest";

		StudentScheduleTest form = new StudentScheduleTest();
		User user = getPrincipal();

		try {
			logger.info("$$$$ SP status: " + user.getUserid());
			Session session = new Session();
			Registration regist = registrationService.findByUser(user);
			if(regist != null) {
				form.setRegistrationid(regist.getRegistrationid());
				form.setScheduleid(regist.getSchedule().getScheduleid());
				session = regist.getSchedule().getSession();
				List<Schedule> schedules = scheduleService.getBySession(session);
				form.setSchedules(schedules);
			}
			List<Session> sessions = sessionService.getByProgram(user.getProgram());
			form.setSession(session);
			form.setSessions(sessions);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		model.addAttribute("loginUser", user);
		model.addAttribute("studentScheduleTest", form);
		
		return rtn;
	}

	@RequestMapping(value = { "/schedule/{sesid}" }, method = RequestMethod.GET)
	public String schedule(Model model, @PathVariable("sesid") int sesid) {
		String rtn = "/client/scheduleTest";

		try {
			StudentScheduleTest form = new StudentScheduleTest();
			User user = getPrincipal();
			logger.info("$$$$ SP status: " + user.getUserid());

			Session session = sessionService.getById(sesid);
			List<Session> sessions = sessionService.getByProgram(user.getProgram());
			List<Schedule> schedules = scheduleService.getBySession(session);
			form.setSchedules(schedules);

			Registration registration = registrationService.findByUser(user);
			if (registration != null) {
				form.setRegistrationid(registration.getRegistrationid());
				form.setScheduleid(registration.getSchedule().getScheduleid());
			} else {
				form.setRegistrationid(0);
				form.setScheduleid(0);

			}

			form.setSession(session);
			form.setSessions(sessions);
			model.addAttribute("loginUser", user);
			model.addAttribute("studentScheduleTest", form);
			
			return rtn;

		} catch (Exception e) {
			e.printStackTrace();
		}

		return rtn;
	}

	@RequestMapping(value = "/schedule", method = RequestMethod.POST)
	public String createschedule(@Valid StudentScheduleTest form, BindingResult bindingResult, Model model,
			RedirectAttributes attrs) {

		String rtn = "/client/schedule";
		Message message = new Message();
		String msg;

		try {
			// Form validation
			if (bindingResult.hasErrors()) {
				// failed validation
				logger.info("Profile form validation failed!!!!!!!!");
				List<ObjectError> errors = bindingResult.getAllErrors();
				msg = messageHandler.get("Header.scheduleForm.validation") + "<br />";
				for (ObjectError i : errors) {
					if (i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				attrs.addAttribute("message", message);
				return rtn;
			}

			User currentUser = getPrincipal();

			int scheduleid = form.getScheduleid();
			Schedule schedule = scheduleService.getById(scheduleid);
			int sessionid = schedule.getSession().getSessionid();

			if ((registrationService.findByUser(currentUser) == null) || (form.getRegistrationid() != 0)) {

				Registration register = new Registration();
				register.setRegistrationid(form.getRegistrationid());
				register.setUser(currentUser);
				scheduleid = form.getScheduleid();
				register.setSchedule(scheduleService.getById(scheduleid));
				LocalDate localDate = LocalDate.now();
				Date date = java.sql.Date.valueOf(localDate);
				register.setRegistdate(date);

				register = registrationService.saveRegistration(register);
				form.setRegistrationid(register.getRegistrationid());

/*				String from = "scjimcc@gmail.com";
				String to = "ldcticti@gmail.com";
				String subject = "JavaMailSender";
				String body = "Just-Testing222222222222222222222222!";

				emailService.sendMail(from, to, subject, body);
*/				String param = "" + currentUser.getUserid();
				emailService.sendEmail(1, param, "");
				
				msg = messageHandler.get("StudentSchedule.scheduleTest.success");
				message.setStatus(Message.SUCCESS);
				message.setMessage(msg);

			} else {
				message.setStatus(Message.ERROR);
				message.setMessage(messageHandler.get("StudentSchedule.scheduleTest.error"));

			}
			
			rtn = "redirect:/client/schedule/" + sessionid;

		} catch (Exception e) {
			e.printStackTrace();
			logger.info("Error in /client/profile POST of StudentProfile.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageHandler.get("StudentSchedule.scheduleTest.error"));
		}

		attrs.addFlashAttribute("message", message);
		attrs.addFlashAttribute("studentScheduleTest", form);
		model.addAttribute("loginUser", getPrincipal());
		
		return rtn;
	}

	private User getPrincipal() {
		User user = null;
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		if (principal instanceof LoginUser) {
			user = ((LoginUser) principal).getClient();
		} else {
			user = userService.getByUsername("");
		}
		return user;
	}

}
