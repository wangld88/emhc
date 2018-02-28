package com.emhc.controller.moderator;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.emhc.controller.base.BaseController;
import com.emhc.error.Message;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Registration;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.service.OrganizationService;
import com.emhc.service.ProgramService;
import com.emhc.service.RegistrationService;


@Controller
@RequestMapping({"/moderator"})
public class ModeratorReportpremove extends BaseController {

	@Autowired
	RegistrationService registService;
	
	@Autowired
	ProgramService programService;
	
	@Autowired
	OrganizationService organizationService;
	
	@RequestMapping(value="/report", method=RequestMethod.GET)
	public String dspReport(Model model, 
							HttpSession httpSession) {
		
		String rtn = "/moderator/report";
		User user = getPrincipal();
		
		List<Organization> orgs = organizationService.findAll();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			model.addAttribute("orgs", orgs);
		}
		return rtn;
	}
	
	@RequestMapping(value="/report/org/{orgid}", method=RequestMethod.GET)
	public String dspOrganization(@PathVariable("orgid") Long orgid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/moderator/report";
		User user = getPrincipal();

		List<Program> programs = new ArrayList<>();
				
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			programs = programService.getByOrganizationId(orgid);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		List<Organization> orgs = organizationService.findAll();
		model.addAttribute("orgs", orgs);
		model.addAttribute("programs", programs);
		model.addAttribute("orgid", orgid);
		
		return rtn;
	}
	
	@RequestMapping(value="/report", method=RequestMethod.POST)
	public String getReport(@RequestParam("organizationid") final Long orgid, 
							@RequestParam("programid") final Integer programid, 
							Model model, 
							HttpSession httpSession) {
		
		String rtn = "/moderator/report";
		
		User user = getPrincipal();
		
		List<Organization> orgs = organizationService.findAll();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			List<Program> programs = programService.getByOrganizationId(orgid);
			model.addAttribute("orgs", orgs);
			model.addAttribute("orgid", orgid);
			model.addAttribute("programid", programid);
			model.addAttribute("programs", programs);
			
			List<Registration> regists = new ArrayList<>();
			if(programid != null && !programid.equals(0)) {
				regists = registService.getByProgramid(programid);
			} else {
				regists = registService.getByOrganizationid(orgid);
			}
			model.addAttribute("regists", regists);
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
