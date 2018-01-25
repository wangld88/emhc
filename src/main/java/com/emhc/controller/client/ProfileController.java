package com.emhc.controller.client;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.emhc.dto.ClientUpdatePassword;
import com.emhc.dto.ClientProfileUpdate;
import com.emhc.error.Message;
import com.emhc.model.Program;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;
import com.emhc.validator.ClientUpdatePassowrdValidator;
import com.emhc.validator.ClientProfileUpdateValidator;


/**
 * 
 * @author dong.liu
 *
 */
@Controller
@RequestMapping("/client")
public class ProfileController {
	private static final Logger logger = LoggerFactory.getLogger(ProfileController.class);

	@Autowired
	private UserService userService;
	@Autowired
	private ProgramService programService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private ClientProfileUpdateValidator profileValidator;
	@Autowired
	private ClientUpdatePassowrdValidator resetValidator;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@InitBinder("studentProfileUpdate")
	public void initProfileUpdateBinder(WebDataBinder binder) {
		binder.addValidators(profileValidator);
	}

	@InitBinder("resetPasswordForm")
	public void initResetPasswordeBinder(WebDataBinder binder) {
		binder.addValidators(resetValidator);
	}

	@ModelAttribute("resetPasswordForm")
	public ClientUpdatePassword createPasswordResetModel() {
		return new ClientUpdatePassword();
	}

	@RequestMapping(value = { "/profile" }, method = RequestMethod.GET)
	public String profile(Model model) {

		String rtn = "/client/updateProfile";

		try {

			ClientProfileUpdate form = new ClientProfileUpdate();
			User emhcuser = getPrincipal();
			
			form.setUsername(emhcuser.getUsername());
			form.setUserid(emhcuser.getUserid());
			form.setFirstname(emhcuser.getFirstname());
			form.setLastname(emhcuser.getLastname());
			form.setEmail(emhcuser.getEmail());
			form.setPhone(emhcuser.getPhone());
			form.setOrgemail(emhcuser.getOrgemail());
			form.setProgramyear(emhcuser.getProgramyear());
			form.setProgram(emhcuser.getProgram());
			List<Program> programs = programService.findAll();
			form.setPrograms(programs);
			
			model.addAttribute("loginUser", getPrincipal());
			model.addAttribute("studentProfileUpdate", form);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return rtn;
	}

	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	public String profile(@Valid @ModelAttribute("studentProfileUpdate") ClientProfileUpdate form,
			BindingResult bindingResult, Model model) {

		String rtn = "/client/updateProfile";

		User emhcuser = getPrincipal();

		Message message = new Message();

		logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);

		String username = form.getUsername();
		String firstname = form.getFirstname();
		String lastname = form.getLastname();
		String email = form.getEmail();
		String phone = form.getPhone();
		String orgemail = form.getOrgemail();
		Integer programyear = form.getProgramyear();
		Program program = form.getProgram();

		ClientProfileUpdate newForm = new ClientProfileUpdate();
		newForm.setUsername(username);
		newForm.setFirstname(firstname);
		newForm.setLastname(lastname);
		newForm.setEmail(email);
		newForm.setPhone(phone);
		newForm.setOrgemail(orgemail);
		newForm.setProgramyear(programyear);
		newForm.setProgram(program);
		List<Program> programs = programService.findAll();
		newForm.setPrograms(programs);
		model.addAttribute("studentProfileUpdate", newForm);
		model.addAttribute("loginUser", getPrincipal());

		try {
			// Form validation
			if (bindingResult.hasErrors()) {
				// failed validation
				logger.info("Profile form validation failed!!!!!!!!");
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageSource.getMessage("StudentProfile.updateProfile.validation", new Object[] {},
						LocaleContextHolder.getLocale()) + "<br />";
				for (ObjectError i : errors) {
					if (i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageSource.getMessage(fieldError, LocaleContextHolder.getLocale()) + "<br />";
					}
				}
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				model.addAttribute("message", message);

				return rtn;
			}

			emhcuser.setUsername(username);
			emhcuser.setFirstname(form.getFirstname());
			emhcuser.setLastname(form.getLastname());
			emhcuser.setEmail(form.getEmail());
			emhcuser.setEmail(form.getPhone());
			emhcuser.setOrgemail(form.getOrgemail());
			emhcuser.setProgramyear(form.getProgramyear());
			emhcuser.setProgram(form.getProgram());

			emhcuser = userService.saveUser(emhcuser);

			message.setStatus(Message.SUCCESS);
			message.setMessage(messageSource.getMessage("StudentProfile.updateProfile.success", new Object[] {},
					LocaleContextHolder.getLocale()));
		} catch (Exception e) {
			logger.info("Error in /client/profile POST of StudentProfile.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageSource.getMessage("StudentProfile.updateProfile.error", new Object[] {},
					LocaleContextHolder.getLocale()));
		}

		model.addAttribute("loginUser", getPrincipal());
		model.addAttribute("message", message);

		return rtn;
	}

	@RequestMapping(value = { "/reset" }, method = RequestMethod.GET)
	public String reset(Model model) {

		String rtn = "/client/updatePassword";

		try {

			ClientUpdatePassword form = new ClientUpdatePassword();
			
			model.addAttribute("loginUser", getPrincipal());
			model.addAttribute("resetPassword", form);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return rtn;
	}

	@RequestMapping(value = "/reset", method = RequestMethod.POST)
	public String reset(@Valid @ModelAttribute("resetPasswordForm") ClientUpdatePassword form, BindingResult bindingResult,
			Model model) {

		String rtn = "/client/updatePassword";

		User emhcuser = getPrincipal();

		Message message = new Message();
		String msg;
		String oldpassword = form.getOldpassword();
		String newpassword = form.getPassword();
		String confirmpassword = form.getConfirmpassword();

		ClientUpdatePassword newForm = new ClientUpdatePassword();
		newForm.setOldpassword(oldpassword);
		newForm.setPassword(newpassword);
		newForm.setConfirmpassword(confirmpassword);
		model.addAttribute("loginUser", getPrincipal());

		model.addAttribute("resetPasswordForm", newForm);

		logger.info("Processing resetPasswordForm form={}, bindingResult={}", form, bindingResult);

		try {

			// Form validation
			if (bindingResult.hasErrors()) {
				// failed validation
				model.addAttribute("resetPasswordForm", form);
				logger.info("Profile form validation failed!!!!!!!!");
				List<ObjectError> errors = bindingResult.getAllErrors();
				msg = messageSource.getMessage("StudentProfile.updateProfile.validation", new Object[] {},
						LocaleContextHolder.getLocale()) + "<br />";
				for (ObjectError i : errors) {
					if (i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageSource.getMessage(fieldError, LocaleContextHolder.getLocale()) + "<br />";
					}
				}
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				model.addAttribute("message", message);

				return rtn;
			}

			emhcuser.setPassword(bCryptPasswordEncoder.encode(newpassword));
			emhcuser = userService.saveUser(emhcuser);

			msg = messageSource.getMessage("StudentProfile.updatePassword.success", new Object[] {},
					LocaleContextHolder.getLocale());

			message.setStatus(Message.SUCCESS);
			message.setMessage(msg);

		} catch (Exception e) {
			logger.info("Error in /client/profile POST of StudentProfile.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageSource.getMessage("StudentProfile.updatePassword.error", new Object[] {},
					LocaleContextHolder.getLocale()));
		}

		model.addAttribute("message", message);

		return "redirect:login";
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
