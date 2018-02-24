package com.emhc.controller.moderator;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

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
import com.emhc.service.UserService;
import com.emhc.validator.UserFormValidator;

@Controller
@RequestMapping({"/moderator"})
public class ModeratorUser extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(ModeratorUser.class);

	@Autowired
    UserFormValidator validator;
	
 	@RequestMapping(value={"/user"}, method = RequestMethod.GET)
	public String dspUser(Model model){
 		String rtn = "/moderator/user";
 		
		User user = getPrincipal();
		
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			logger.info("dspUser");
			UserForm userForm = new UserForm();
			Organization org = (user.getProgram()).getOrganization();
			//List<Organization> orgs = organizationService.findAll();
			List<Role> roles = roleService.findByNameNot("ADMIN");
			//userForm.setOrganizations(orgs);
			List<Program> programs = programService.getByOrganization(org);
			userForm.setPrograms(programs);
			userForm.setRoles(roles);
			userForm.setOrganization(org);
			
			model.addAttribute("userForm", userForm);
		}
		
 		return rtn;
 	}
	
 	@RequestMapping(value={"/user/{userid}"}, method = RequestMethod.GET)
	public String dspUser(Model model, @PathVariable("userid") Integer userid, HttpSession httpSession){
 		String rtn = "/moderator/user";
 		
		User loginUser = getPrincipal();
		
		if(loginUser == null) {
			rtn = "/moderator/login";
		} else {
			logger.info("dspUser");
			User user = userService.getById(userid);
			UserForm userForm = new UserForm(user);
			Organization org = (loginUser.getProgram()).getOrganization();
			userForm.setOrganization(org);
			//List<Organization> orgs = organizationService.findAll();
			List<Program> programs = programService.getByOrganization(org);
			userForm.setPrograms(programs);
			List<Role> roles = roleService.findByNameNot("ADMIN");
			//List<Role> roles = roleService.getAll();
			//userForm.setOrganizations(orgs);
			userForm.setRoles(roles);
			model.addAttribute("userForm", userForm);
		}
		
 		return rtn;
 	}
	
 	
	@RequestMapping(value={"/user/org/{orgid}"}, method = RequestMethod.GET)
	public String dspOrganization(ModelMap model, @PathVariable("orgid") Long orgid, HttpSession httpSession) {
		
		User user = getPrincipal();
		
		if(user == null) {
			return "/moderator/login";
		}
		
		UserForm userForm = new UserForm();
		Organization organization = organizationService.getById(orgid);

		if(orgid.longValue() != 0) {
			List<Program> programs = programService.getByOrganization(organization);
			userForm.setPrograms(programs);
		}
		//Organization org = (user.getProgram()).getOrganization();
		//List<Organization> organizations = organizationService.findAll();
		List<Role> roles = roleService.findByNameNot("ADMIN");
		userForm.setRoles(roles);
		//List<Role> roles = roleService.getAll();
		userForm.setOrganization(organization);
		//userForm.setOrganizations(organizations);
		
		model.addAttribute("userForm", userForm);
		
		return "/moderator/user";
	}
	
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public String createUser(@Valid UserForm userForm, ModelMap model, Errors errors, BindingResult bindingResult) {

		User loginUser = getPrincipal();
		
		String rtn = "redirect:/moderator/users";
		
		if(loginUser == null) {
			return "/moderator/login";
		} else {
			//model.addAttribute("loginUser", user);
		}
		
		List<Program> programs = new ArrayList<Program>();
		Organization org = (loginUser.getProgram()).getOrganization();
		userForm.setOrganization(org);
		programs = programService.getByOrganization(org);
		userForm.setPrograms(programs);
                
		if (bindingResult.hasErrors()) {

			return "/moderator/user";
		} else {
			
			try{
		        //validator.validate(userForm, bindingResult);
		         
		        /*if (bindingResult.hasErrors()) {
		        	return "/moderator/user";
		        }*/
		        Role role = userForm.getRole(); //roleService.findById();
		        userForm.setRole(role);
				LocalDate localDate = LocalDate.now();
				Date date = java.sql.Date.valueOf(localDate);
				//userForm.setCreationdate(date);
				
				User user = userForm.getUser();
				user.setCreatedby(loginUser.getUserid());
				user.setCreationdate(date);
				
				if(user.getUserid() == 0) { 
					userService.savUser(user);}
				else{
				BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();				
				String passworduser = (userService.getById((user.getUserid())).getPassword());
				String passworduserform =userForm.getPassword();
				
				if (!passwordEncoder.matches(passworduserform,passworduser)){
				//if (!passworduser.equals(passworduserform)){
		    	 		logger.info("oldpsw.nomatch :" + passworduserform + ", " + passworduser);
		    	 		errors.rejectValue("password", "NotMatch.password.adminuser");
		    	 		String rtn2 = "/moderator/user";
		    	  		return rtn2;
				 }
				 else{
					 userService.savUser(user);
				 }
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
		String rtn = "/moderator/users";
		//logger.info("dspSessions is called");
		User user = getPrincipal();
	
		if(user == null) {
			rtn = "/moderator/login";
		} else {
			
		//get users by not admin under same organization
			List<User> users = new ArrayList<User>();
			List<User> usersbypro = new ArrayList<User>();
			Organization org = (user.getProgram()).getOrganization();
			List<Program> programs = programService.getByOrganization(org);
			//List<Role> roles = roleService.findByNameNot("ADMIN");
			for( int i = 0 ; i < programs.size() ; i++){
				Program program = new Program();
				program = programs.get(i);
				List<User> usrs=userService.getByProgram(program);
				usersbypro.addAll(usrs);
			   }
						
			users = userService.getByRoleNameNot("ADMIN");
			users.retainAll(usersbypro);
						
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
