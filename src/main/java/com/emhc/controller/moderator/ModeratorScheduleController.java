package com.emhc.controller.moderator;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;
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
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.emhc.controller.base.BaseController;
import com.emhc.dto.ScheduleForm;
import com.emhc.error.Message;
import com.emhc.model.Session;
import com.emhc.model.Location;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Schedule;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.validator.ScheduleFormValidator;


@Controller
@RequestMapping("/moderator")
public class ModeratorScheduleController extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(ModeratorScheduleController.class);
	
    @Autowired
    private ScheduleFormValidator scheduleFormValidator;	
    
    @InitBinder("scheduleForm")
    public void initBinder(WebDataBinder binder) {
    	binder.addValidators(scheduleFormValidator);
    }
    
    @ModelAttribute("scheduleForm")
    public ScheduleForm createDTO() {
    	return new ScheduleForm();
    }


	@RequestMapping(value="/schedule", method=RequestMethod.GET)
	public String dspSchedule(Model model) {
		String rtn = "/moderator/schedule";
		
		User user = getPrincipal();
	
		List<Organization> orgs = organizationService.findAll();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			model.addAttribute("scheduleForm", new ScheduleForm());
			model.addAttribute("orgs", orgs);
		}
		
		return rtn;
	}

	
	@RequestMapping(value="/schedule/{scheduleid}", method=RequestMethod.GET)
	public String dspSchedule(@PathVariable("scheduleid") Integer scheduleid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/moderator/schedule";
		
		User user = getPrincipal();
		ScheduleForm form = new ScheduleForm();
		List<Session> sessions = new ArrayList<>();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			Schedule schedule = scheduleService.getById(scheduleid);
			form = new ScheduleForm(schedule);
			sessions = sessionService.getByOrganization(schedule.getSession().getProgram().getOrganization());
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		List<Organization> orgs = organizationService.findAll();
		model.addAttribute("scheduleForm", form);
		model.addAttribute("orgs", orgs);
		model.addAttribute("sessions", sessions);
		
		return rtn;
	}

	
	@RequestMapping(value="/schedule/org/{orgid}", method=RequestMethod.GET)
	public String dspOrganization(@PathVariable("orgid") Long orgid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/moderator/schedule";
		
		User user = getPrincipal();
		ScheduleForm form = new ScheduleForm();
	
		List<Session> sessions = new ArrayList<>();
				
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			sessions = sessionService.getByOrganizationid(orgid);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		
		List<Organization> orgs = organizationService.findAll();
		
		form.setOrganizationid(orgid);
		
		model.addAttribute("orgs", orgs);
		model.addAttribute("scheduleForm", form);
		model.addAttribute("sessions", sessions);
		
		return rtn;
	}

	
	@RequestMapping(value="/schedule", method=RequestMethod.POST)
	public String doSchedule(@Valid @ModelAttribute("scheduleForm") ScheduleForm form, 
		BindingResult bindingResult, Model model, HttpSession httpSession, final RedirectAttributes ra) {
		
		//logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);		
		String rtn = "/moderator/schedules";
		
		User user = getPrincipal();
		Message message = new Message();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			if (bindingResult.hasErrors()) {
				
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageHandler.get("Header.scheduleForm.validation") + "<br />";
				
				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}
				
				List<Organization> orgs = organizationService.findAll();
				List<Program> programs = programService.getByOrganizationId(form.getOrganizationid());
				List<Location> locations = locationService.getByOrganizationid(form.getOrganizationid());
				model.addAttribute("orgs", orgs);
				model.addAttribute("scheduleForm", form);
				model.addAttribute("programs", programs);
				model.addAttribute("locations", locations);

				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				int scheduleid = form.getScheduleid();
				model.addAttribute("message", message);
				if(scheduleid == 0) {
					return "/moderator/schedule";
				} else {
					ra.addFlashAttribute("errMessage", message);
					return "redirect: schedule/" + scheduleid;
				}
			} else {
				logger.info("Errors: "+bindingResult.getErrorCount());;
			}
			
			Schedule schedule = form.getSchedule();
			if(form.getSessionid() != 0) {
				schedule.setSession(sessionService.getById(form.getSessionid()));
			}
			
			schedule = scheduleService.save(schedule);
			
			List<Schedule> schedules = scheduleService.getAll();
			
			model.addAttribute("schedules", schedules);
		}
		
		return rtn;
	}
	

	@RequestMapping(value="/schedules", method=RequestMethod.GET)
	public String dspSchedules(Model model) {
		String rtn = "/moderator/schedules";
		logger.info("dspSchedules is called");
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
			List<Schedule> schedules = scheduleService.getAll();
			
			model.addAttribute("schedules", schedules);
		}
		
		return rtn;
	}
    
	private User getPrincipal(){
    	User user = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        if (principal instanceof LoginUser) {
            user = ((LoginUser)principal).getUser();
        } else {
            user = userService.getByUsername("");
        }
        return user;
    }

}
