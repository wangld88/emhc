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
import com.emhc.dto.LocationForm;
import com.emhc.error.Message;
import com.emhc.model.Organization;
import com.emhc.model.Location;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.validator.LocationFormValidator;


@Controller
@RequestMapping("/moderator")
public class ModeratorLocationpremove extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(ModeratorLocationpremove.class);
	
    @Autowired
    private LocationFormValidator locationFormValidator;
    
    @InitBinder("locationForm")
    public void initBinder(WebDataBinder binder) {
    	binder.addValidators(locationFormValidator);
    }

    @ModelAttribute("locationForm")
    public LocationForm createDTO() {
    	return new LocationForm();
    }


	@RequestMapping(value="/location", method=RequestMethod.GET)
	public String dspLocation(Model model) {
		String rtn = "/moderator/location";
		
		User user = getPrincipal();
	
		List<Organization> orgs = organizationService.findAll();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			model.addAttribute("locationForm", new LocationForm());
			model.addAttribute("orgs", orgs);
		}
		
		return rtn;
	}

	
	@RequestMapping(value="/location/{locationid}", method=RequestMethod.GET)
	public String dspLocation(@PathVariable("locationid") Integer locationid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/moderator/location";
		
		User user = getPrincipal();
		LocationForm form = new LocationForm();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			Location location = locationService.getById(locationid);
			form = new LocationForm(location);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		List<Organization> orgs = organizationService.findAll();
		model.addAttribute("locationForm", form);
		model.addAttribute("orgs", orgs);
		
		return rtn;
	}

	
	@RequestMapping(value="/location", method=RequestMethod.POST)
	public String doLocation(@Valid @ModelAttribute("locationForm") LocationForm form, 
		BindingResult bindingResult, Model model, HttpSession httpSession, final RedirectAttributes ra) {
		
		//logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);		
		String rtn = "/moderator/locations";
		
		User user = getPrincipal();
		Message message = new Message();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			if (bindingResult.hasErrors()) {
				
				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageHandler.get("Header.locationForm.validation") + "<br />";
				
				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}
				
				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				int locationid = form.getLocationid();
				model.addAttribute("message", message);
				if(locationid == 0) {
					return "/moderator/location";
				} else {
					ra.addFlashAttribute("errMessage", message);
					return "redirect: location/" + locationid;
				}
			} else {
				logger.info("Errors: "+bindingResult.getErrorCount());;
			}
			
			Location location = form.getLocation();

			locationService.save(location);
			List<Location> locations = locationService.getAll();
			
			model.addAttribute("locations", locations);
		}
		
		return rtn;
	}
	

	@RequestMapping(value="/locations", method=RequestMethod.GET)
	public String dspLocations(Model model) {
		String rtn = "/moderator/locations";
		logger.info("dspLocations is called");
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
			List<Location> locations = locationService.getAll();
			
			model.addAttribute("locations", locations);
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
