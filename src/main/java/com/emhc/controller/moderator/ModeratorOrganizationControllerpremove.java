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
import com.emhc.dto.OrganizationForm;
import com.emhc.error.Message;
import com.emhc.model.Organization;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.service.UserService;
import com.emhc.validator.OrganizationFormValidator;


/**
 * 
 * 
 * @author KJC
 *
 */
@Controller
@RequestMapping("/moderator")
public class ModeratorOrganizationControllerpremove extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(ModeratorOrganizationControllerpremove.class);
	
	@Autowired
	UserService userService;
	
    @Autowired
    private OrganizationFormValidator organizationValidator;

    @InitBinder("organizationForm")
    public void initActivationBinder(WebDataBinder binder) {
        binder.addValidators(organizationValidator);
    }
	
    @ModelAttribute("organizationForm")
	public OrganizationForm createActivationModel() {
		return new OrganizationForm();
	}
	
	@RequestMapping(value="/organization", method=RequestMethod.GET)
	public String dspOrganization(Model model) {
		String rtn = "/moderator/organization";
		
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
		}
		
		model.addAttribute("organizationForm", new OrganizationForm());
		
		return rtn;
	}

	
	@RequestMapping(value="/organization/{orgid}", method=RequestMethod.GET)
	public String dspOrganization(@PathVariable("orgid") Long orgid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/moderator/organization";
		
		User user = getPrincipal();
		OrganizationForm form = new OrganizationForm();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
			Organization organization = organizationService.getById(orgid);
			form = new OrganizationForm(organization);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		model.addAttribute("organizationForm", form);
		
		return rtn;
	}

	
	@RequestMapping(value="/organization", method=RequestMethod.POST)
	public String doOrganization(@Valid @ModelAttribute("organizationForm") OrganizationForm form, 
		BindingResult bindingResult, Model model, HttpSession httpSession, final RedirectAttributes ra) {
		
		//logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);		
		String rtn = "/moderator/organizations";
		
		User user = getPrincipal();
		Message message = new Message();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			if (bindingResult.hasErrors()) {
				
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageHandler.get("Header.organizationForm.validation") + "<br />";
				
				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}
				
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				long orgid = form.getOrganizationid();
				model.addAttribute("message", message);
				if(orgid == 0) {
					return "/moderator/organization";
				} else {
					ra.addFlashAttribute("errMessage", message);
					return "redirect: organization/" + orgid;
				}
			} else {
				logger.info("Errors: "+bindingResult.getErrorCount());;
			}

			Organization org = form.getOrganization();
			
			organizationService.saveOrganization(org);
			List<Organization> orgs = organizationService.findAll();
			
			model.addAttribute("orgs", orgs);
		}
		
		return rtn;
	}
	

	@RequestMapping(value="/organizations", method=RequestMethod.GET)
	public String dspOrganizations(Model model) {
		String rtn = "/moderator/organizations";
		
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
			List<Organization> orgs = organizationService.findAll();
			
			model.addAttribute("orgs", orgs);
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
