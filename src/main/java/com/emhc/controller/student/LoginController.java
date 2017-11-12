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
import com.emhc.model.EmhcUser;
import com.emhc.model.Program;
import com.emhc.model.Role;
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

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("auth.getName = " + auth.getName());
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student/login/login");
		return modelAndView;
	}
	
	@RequestMapping(value={"/login_emhc"}, method = RequestMethod.GET)
	public ModelAndView login_emhc(){
		System.out.println("-------run to here login of student--------");

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("auth.getName = " + auth.getName());
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student/login/login_emhc");
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
		EmhcUser emhcuser = userService.findUserByEmail(auth.getName());
		System.out.println("auth.getName = " + auth.getName());
		System.out.println("userName = " + emhcuser.getUsername());
		modelAndView.addObject("userName", "Welcome " + emhcuser.getUsername() + " " + emhcuser.getLastname() + " (" + emhcuser.getEmail() + ")");
		modelAndView.addObject("adminMessage","Content Available Only for Users with Admin Role");
		modelAndView.setViewName("student/home");
		return modelAndView;
	}
	

}
