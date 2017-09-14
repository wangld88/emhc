package com.emhc.controller.student;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.model.User;
import com.emhc.service.UserService;

@Controller
@RequestMapping("/student")
public class LoginController {
	
	@Autowired
	private UserService userService;

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
		System.out.println("-------run to here 333--------");
		User user = new User();
		modelAndView.addObject("user", user);
		modelAndView.setViewName("student/login/registration");
		System.out.println("-------run to here 444--------");
		return modelAndView;
	}
	
	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public ModelAndView createNewUser(@Valid User user, BindingResult bindingResult) {
		System.out.println("------run to createNewUser-----");

		ModelAndView modelAndView = new ModelAndView();
		User userExists = userService.findUserByEmail(user.getEmail());
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
			
			System.out.println("------run to save user-----");
			userService.saveUser(user);
			modelAndView.addObject("successMessage", "User has been registered successfully");
			modelAndView.addObject("user", new User());
			modelAndView.setViewName("/student/login/registration");
			
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
