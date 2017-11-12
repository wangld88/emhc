package com.emhc.controller.student;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.emhc.dto.StudentScheduleTest;
import com.emhc.dto.StudentProfileUpdate;
import com.emhc.error.Message;
import com.emhc.model.EmhcUser;
import com.emhc.model.Program;
import com.emhc.security.LoginStudent;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;


/**
 * 
 * @author dong.liu
 *
 */
@Controller
@RequestMapping("/student")
public class ScheduleController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ScheduleController.class);

 	 
	@Autowired
	private UserService userService;
	@Autowired
	private ProgramService programService;
  @Autowired
   private MessageSource messageSource;
 
 	@RequestMapping(value={"/schedule"}, method = RequestMethod.GET)
	public String schedule(Model model){

		System.out.println("-------run to schedule here-------");
		//String rtn = "/student/scheduleTest";
		String rtn = "/student/scheduleTest";

		try{
/*			StudentScheduleTest form = new StudentScheduleTest();
			EmhcUser emhcuser = getPrincipal();
			LOGGER.info("$$$$ SP status: " + emhcuser.getUserid());
			form.setUsername(emhcuser.getUsername());
			System.out.println("------userid is "+ emhcuser.getUserid());
			form.setUserid(emhcuser.getUserid());
			form.setFirstname(emhcuser.getFirstname());
			form.setLastname(emhcuser.getLastname());
			form.setEmail(emhcuser.getEmail());
			form.setProgramyear(emhcuser.getProgramyear());
			form.setProgram(emhcuser.getProgram());
			List<Program> programs = programService.findAll();
			form.setPrograms(programs);
			model.addAttribute("studentProfileUpdate", form);
	
*/
		}
		catch (Exception e){
			e.printStackTrace();
		}
		return rtn;
	}

	
	@RequestMapping(value="/schedule", method=RequestMethod.POST)
	public String schedule(@Valid @ModelAttribute("studentScheduleTest") StudentScheduleTest form, BindingResult bindingResult, Model model) {
		
		String rtn = "/student/scheduleTest";
		
		
		Message message = new Message();
		
		LOGGER.debug("Processing scheduleTest form={}, bindingResult={}", form, bindingResult);
		
		try {
			

			//Form validation
			if (bindingResult.hasErrors()) {
	            // failed validation
				model.addAttribute("studentScheduleTest", form);

				
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageSource.getMessage("StudentProfile.updateProfile.validation", new Object[] {}, LocaleContextHolder.getLocale()) + "<br />";
				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageSource.getMessage(fieldError, LocaleContextHolder.getLocale()) + "<br />";
					}
				}
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				model.addAttribute("message", message);
				
	            return rtn;
	        }
			
			
			message.setStatus(Message.SUCCESS);
			message.setMessage(messageSource.getMessage("StudentProfile.updateProfile.success", new Object[] {}, LocaleContextHolder.getLocale()));
		} catch(Exception e) {
			LOGGER.debug("Error in /student/profile POST of StudentProfile.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageSource.getMessage("StudentProfile.updateProfile.error", new Object[] {}, LocaleContextHolder.getLocale()));
		}
		
		model.addAttribute("message", message);
		
		return rtn;
	}
	
	
	   private EmhcUser getPrincipal(){
	    	EmhcUser user = null;
	        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	        
	        if (principal instanceof LoginStudent) {
	            user = ((LoginStudent)principal).getClient();
	        } else {
	            user = userService.findUserByEmail("");
	        }
	        return user;
	    }
		
	
}
