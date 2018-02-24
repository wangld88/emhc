package com.emhc.controller.moderator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.dto.UserDTO;
import com.emhc.model.User;
import com.emhc.service.UserService;

@Controller
@RequestMapping("/moderator")
public class ModeratorLoginController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value={"/", "/login"}, method = RequestMethod.GET)
	public ModelAndView login(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("moderator/login/login");
		return modelAndView;
	}
	
	
	@RequestMapping(value={"/userCreation"}, method = RequestMethod.GET)
	public ModelAndView registration(){
		ModelAndView modelAndView = new ModelAndView();
		UserDTO user = new UserDTO();
		modelAndView.addObject("user", user);
		modelAndView.setViewName("moderator/registration");
		return modelAndView;
	}
	
	@RequestMapping(value = "/userCreation", method = RequestMethod.POST)
	public ModelAndView createNewUser(@Valid UserDTO userDTO, BindingResult bindingResult) {
		ModelAndView modelAndView = new ModelAndView();
		User userExists = userService.getByUsername(userDTO.getUsername());
		if (userExists != null) {
			bindingResult
					.rejectValue("username", "error.user",
							"There is already a user registered with the username provided");
		}
		if (bindingResult.hasErrors()) {
			modelAndView.setViewName("registration");
		} else {
			userService.saveUser(userDTO.getUser());
			modelAndView.addObject("successMessage", "User has been registered successfully");
			modelAndView.addObject("user", new UserDTO());
			modelAndView.setViewName("moderator/registration");
			
		}
		return modelAndView;
	}
	
	@RequestMapping(value="/home", method = RequestMethod.GET)
	public ModelAndView home(){
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.getByUsername(auth.getName());
		modelAndView.addObject("userName", "Welcome " + user.getUsername() + " " + user.getLastname() + " (" + user.getUsername() + ")");
		modelAndView.addObject("moderatorMessage","Content Available Only for Users with Moderator Role!!!");
		modelAndView.setViewName("moderator/home");
		return modelAndView;
	}
	
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logoutPage (HttpServletRequest request, HttpServletResponse response) {

	    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    if (auth != null){    
	        new SecurityContextLogoutHandler().logout(request, response, auth);
	    }
	    return "redirect:/moderator/login?logout";
	}

}
