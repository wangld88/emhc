package com.emhc.controller.admin;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.emhc.controller.base.BaseController;
import com.emhc.dto.UserForm;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Role;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.validator.UserFormValidator;


@Controller
@RequestMapping({"/admin"})
public class AdminUser extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(AdminUser.class);

	@Autowired
    UserFormValidator validator;
	
 	@RequestMapping(value={"/user"}, method = RequestMethod.GET)
	public String dspUser(Model model){
 		String rtn = "/admin/user";
 		
		User user = getPrincipal();
		
		if(user == null) {
			rtn = "/admin/login";
		} else {
			logger.info("dspUser");
			UserForm userForm = new UserForm();
			List<Organization> orgs = organizationService.findAll();
			List<Role> roles = roleService.getAll();
			userForm.setOrganizations(orgs);
			userForm.setRoles(roles);
			model.addAttribute("userForm", userForm);
		}
		
 		return rtn;
 	}
	
 	@RequestMapping(value={"/user/{userid}"}, method = RequestMethod.GET)
	public String dspUser(Model model, @PathVariable("userid") Integer userid, HttpSession httpSession){
 		String rtn = "/admin/user";
 		
		User loginUser = getPrincipal();
		
		if(loginUser == null) {
			rtn = "/admin/login";
		} else {
			logger.info("dspUser");
			User user = userService.getById(userid);
			UserForm userForm = new UserForm(user);
			List<Organization> orgs = organizationService.findAll();
			List<Program> programs = programService.getByOrganization(user.getProgram().getOrganization());
			userForm.setPrograms(programs);
			List<Role> roles = roleService.getAll();
			userForm.setOrganizations(orgs);
			userForm.setRoles(roles);
			model.addAttribute("userForm", userForm);
		}
		
 		return rtn;
 	}
	
 	
	@RequestMapping(value={"/user/org/{orgid}"}, method = RequestMethod.GET)
	public String dspOrganization(ModelMap model, @PathVariable("orgid") Long orgid, HttpSession httpSession) {
		
		User user = getPrincipal();
		
		if(user == null) {
			return "/admin/login";
		}
		
		UserForm userForm = new UserForm();
		Organization organization = organizationService.getById(orgid);

		if(orgid.longValue() != 0) {
			List<Program> programs = programService.getByOrganization(organization);
			userForm.setPrograms(programs);
		}
		List<Organization> organizations = organizationService.findAll();
		List<Role> roles = roleService.getAll();
		userForm.setOrganization(organization);
		userForm.setOrganizations(organizations);
		userForm.setRoles(roles);
		model.addAttribute("userForm", userForm);
		
		return "/admin/user";
	}
	
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public String createUser(@Valid UserForm userForm, Errors errors, ModelMap model,BindingResult bindingResult) {

		User loginUser = getPrincipal();
		
		String rtn = "redirect:/admin/users";
		
		if(loginUser == null) {
			return "/admin/login";
		} else {
			//model.addAttribute("loginUser", user);
		}
		
		List<Program> programs = new ArrayList<Program>();
		programs = programService.findAll();
		userForm.setPrograms(programs);

		if (bindingResult.hasErrors()) {

			return "/admin/user";
		} else {
			
			try{
		        //validator.validate(userForm, bindingResult);
		         
		        /*if (bindingResult.hasErrors()) {
		        	return "/admin/user";
		        }*/
		        Role role = userForm.getRole(); //roleService.findById();
		        userForm.setRole(role);
				LocalDate localDate = LocalDate.now();
				Date date = java.sql.Date.valueOf(localDate);
				//userForm.setCreationdate(date);
				
				User user = userForm.getUser();
				//logger.info("useredit"+user.getUserid());
				//logger.info("loginuseredit"+loginUser.getUserid());
				user.setCreatedby(loginUser.getUserid());
				user.setCreationdate(date);
				
				if(user.getUserid() == 0) { 
					userService.saveUser(user);}
				/*else{
				BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();				
				String passworduser = (userService.getById((user.getUserid())).getPassword());
				String passworduserform =userForm.getPassword();
				
				if (!passwordEncoder.matches(passworduserform,passworduser)){
				//if (!passworduser.equals(passworduserform)){
		    	 		logger.info("oldpsw.nomatch :" + passworduserform + ", " + passworduser);
		    	 		errors.rejectValue("password", "NotMatch.password.adminuser");
		    	 		String rtn2 = "redirect:/admin/user/"+user.getUserid();
		    	  		return rtn2;
				 }*/
				 else{
					 userService.savUser(user);
				 }
				
				 model.addAttribute("successMessage", "User has been registered successfully");
			}
			catch(Exception e){
				e.printStackTrace();
				
			}
		}
		return rtn;
}

	@RequestMapping(value="/users", method=RequestMethod.GET)
	public String dspUsers(Model model) {
		String rtn = "/admin/users";
		//logger.info("dspSessions is called");
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/admin/login";
		} else {
			
			List<User> users = userService.getAll();
			
			model.addAttribute("users", users);
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
