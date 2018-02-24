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
import com.emhc.dto.TemplateForm;
import com.emhc.error.Message;
import com.emhc.model.Template;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.validator.TemplateFormValidator;


@Controller
@RequestMapping("/moderator")
public class ModeratorEmail extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(ModeratorEmail.class);
	
    @Autowired
    private TemplateFormValidator templateFormValidator;	
    
    @InitBinder("templateForm")
    public void initBinder(WebDataBinder binder) {
    	binder.addValidators(templateFormValidator);
    }
    
    @ModelAttribute("templateForm")
    public TemplateForm createDTO() {
    	return new TemplateForm();
    }

	@RequestMapping(value="/template", method=RequestMethod.GET)
	public String Template(Model model) {
		String rtn = "/moderator/template";
		
		User user = getPrincipal();
	
		//List<Organization> orgs = organizationService.findAll();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			model.addAttribute("templateForm", new TemplateForm());
		}
		
		return rtn;
	}

	
	@RequestMapping(value="/template/{templateid}", method=RequestMethod.GET)
	public String dspTemplate(@PathVariable("templateid") Integer templateid, 
							@ModelAttribute("errMessage") Message errMessage, 
							Model model) {
		
		String rtn = "/moderator/template";
		
		User user = getPrincipal();
		TemplateForm form = new TemplateForm();
	
		Template template = new Template();
				
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			template = templateService.getById(templateid);
			form = new TemplateForm(template);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		
		
		model.addAttribute("templateForm", form);
		
		return rtn;
	}

	
	@RequestMapping(value="/template", method=RequestMethod.POST)
	public String doTemplate(@Valid @ModelAttribute("templateForm") TemplateForm form, 
							BindingResult bindingResult, 
							Model model, 
							HttpSession httpSession, 
							RedirectAttributes ra) {
		
		//logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);		
		String rtn = "/moderator/templates";
		
		User user = getPrincipal();
		Message message = new Message();

		if(user == null) {
			rtn = "/moderator/login";
		} else {
			if (bindingResult.hasErrors()) {
				
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageHandler.get("Header.templateForm.validation") + "<br />";
				
				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}
				
				model.addAttribute("templateForm", form);

				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				int templateid = form.getTemplateid();
				model.addAttribute("message", message);

				if(templateid == 0) {
					return "/moderator/template";
				} else {
					ra.addFlashAttribute("errMessage", message);
					return "redirect: template/" + templateid;
				}
			} else {
				logger.info("Errors: "+bindingResult.getErrorCount());;
			}
			
			Template template = form.getTemplate();
			
			template = templateService.save(template);
			
			List<Template> templates = templateService.getAll();
			
			model.addAttribute("templates", templates);
		}
		
		return rtn;
	}
	

	@RequestMapping(value="/templates", method=RequestMethod.GET)
	public String dspTemplates(Model model) {
		String rtn = "/moderator/templates";
		logger.info("dspTemplates is called");
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
			List<Template> templates = templateService.getAll();
			
			model.addAttribute("templates", templates);
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
