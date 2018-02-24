package com.emhc.controller.moderator;

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
import com.emhc.dto.ProgramForm;
import com.emhc.error.Message;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.validator.ProgramFormValidator;


@Controller
@RequestMapping("/moderator")
public class ModeratorProgramController extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(ModeratorProgramController.class);
	
   
    @Autowired
    private ProgramFormValidator programFormValidator;
    
    @InitBinder("programForm")
    public void initBinder(WebDataBinder binder) {
    	binder.addValidators(programFormValidator);
    }

    @ModelAttribute("programForm")
    public ProgramForm createDTO() {
    	return new ProgramForm();
    }


	@RequestMapping(value="/program", method=RequestMethod.GET)
	public String dspProgram(Model model) {
		String rtn = "/moderator/program";
		
		User user = getPrincipal();
	
		//List<Organization> orgs = organizationService.findAll();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			Organization org = (user.getProgram()).getOrganization();
			
			model.addAttribute("programForm", new ProgramForm());
			model.addAttribute("org", org);
		}
		
		return rtn;
	}

	
	@RequestMapping(value="/program/{programid}", method=RequestMethod.GET)
	public String dspProgram(@PathVariable("programid") Integer programid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/moderator/program";
		
		User user = getPrincipal();
		ProgramForm form = new ProgramForm();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			Program program = programService.getById(programid);
			form = new ProgramForm(program);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		//List<Organization> orgs = organizationService.findAll();
		Organization org = (user.getProgram()).getOrganization();
		
		model.addAttribute("programForm", form);
		model.addAttribute("org", org);
		
		return rtn;
	}

	
	@RequestMapping(value="/program", method=RequestMethod.POST)
	public String doProgram(@Valid @ModelAttribute("programForm") ProgramForm form, 
		BindingResult bindingResult, Model model, HttpSession httpSession, final RedirectAttributes ra) {
		
		//logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);		
		String rtn = "/moderator/programs";
		
		User user = getPrincipal();
				
		Message message = new Message();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			if (bindingResult.hasErrors()) {
				
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageHandler.get("Header.programForm.validation") + "<br />";
				
				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}
				
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				int programid = form.getProgramid();
				model.addAttribute("message", message);
				if(programid == 0) {
					return "/moderator/program";
				} else {
					ra.addFlashAttribute("errMessage", message);
					return "redirect: program/" + programid;
				}
			} else {
				logger.info("Errors: "+bindingResult.getErrorCount());;
			}
			Organization org = (user.getProgram()).getOrganization();
			form.setOrganization(org);
			Program program = form.getProgram();
			programService.saveProgram(program);
			
			//List<Program> programs = programService.findAll();
				
			//(program.getOrganization()).setOrganizationid(orgid);
			List<Program> programs = programService.getByOrganization(org);
			
			model.addAttribute("programs", programs);
		}
		
		return rtn;
	}
	

	@RequestMapping(value="/programs", method=RequestMethod.GET)
	public String dspPrograms(Model model) {
		String rtn = "/moderator/programs";
		logger.info("dspPrograms is called");
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
			Organization org = (user.getProgram()).getOrganization();
			List<Program> programs = programService.getByOrganization(org);
			
			model.addAttribute("programs", programs);
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
