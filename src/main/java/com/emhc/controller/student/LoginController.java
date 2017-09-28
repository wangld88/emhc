package com.emhc.controller.student;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.dto.UserDTO;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Role;
import com.emhc.model.User;
import com.emhc.service.OrganizationService;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;
import com.emhc.validator.UserDTOValidator;

@Controller
@RequestMapping("/student")
public class LoginController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private OrganizationService organizationService;
	@Autowired
	private ProgramService programService;
    @Autowired
    UserDTOValidator validator;

	@RequestMapping(value={"/login"}, method = RequestMethod.GET)
	public ModelAndView login(){
		System.out.println("-------run to here login of student--------");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student/login/login");
		return modelAndView;
	}
	
	
	@RequestMapping(value={"/","/registration"}, method = RequestMethod.GET)
	public ModelAndView registration(){
		ModelAndView modelAndView = new ModelAndView();
		UserDTO userDTO = new UserDTO();
		
		List<Program> programs = programService.findAll();
//		List<Organization> organization = organizationService.findAll();
		userDTO.setPrograms(programs);
		modelAndView.addObject("userDTO", userDTO);
		modelAndView.setViewName("student/login/registration");
		return modelAndView;
	}
	
	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public ModelAndView createNewUser(@Valid UserDTO userDTO, BindingResult bindingResult) {
		System.out.println("------run to createNewUser-----");

		List<Program> programs = new ArrayList<Program>();
		programs = programService.findAll();
		userDTO.setPrograms(programs);
		ModelAndView modelAndView = new ModelAndView();
		User userExists = userService.findUserByEmail(userDTO.getEmail());
		//System.out.println("---Program is ---"+ pro.getProgramid() + pro.getName());
		System.out.println(userExists);
		if (userExists != null) {
			System.out.println("------run to user exist-----");

			bindingResult
					.rejectValue("email", "error.user",
							"There is already a user registered with the email provided");
		}
		if (bindingResult.hasErrors()) {
			System.out.println("------run to has error-----");

			modelAndView.setViewName("/student/login/registration");
		} else {
			
			try{
				System.out.println("------run to save user-----" + userDTO.getProgram());
		        validator.validate(userDTO, bindingResult);
		         
		        if (bindingResult.hasErrors()) {
		        	modelAndView.setViewName("/student/login/registration");
		            return modelAndView;
		        }
		        Role role = new Role();
		        role.setRoleid(1);
				userDTO.setRole(role);
				LocalDate localDate = LocalDate.now();
				Date date = java.sql.Date.valueOf(localDate);
				userDTO.setCreationdate(date);
				
				userService.saveUser(userDTO.getUser());
				modelAndView.addObject("successMessage", "User has been registered successfully");
				modelAndView.setViewName("/student/login/registration");
			}
			catch(Exception e){
				e.printStackTrace();
				
			}
		}
		return modelAndView;
	}
	
	@RequestMapping(value="/home", method = RequestMethod.GET)
	public ModelAndView home(){
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByEmail(auth.getName());
		modelAndView.addObject("userName", "Welcome " + user.getUsername() + " " + user.getLastname() + " (" + user.getEmail() + ")");
		modelAndView.addObject("adminMessage","Content Available Only for Users with Admin Role");
		modelAndView.setViewName("student/home");
		return modelAndView;
	}
	

}
