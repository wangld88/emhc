package com.emhc.controller.student;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.controller.base.BaseController;
import com.emhc.dto.UserDTO;
import com.emhc.model.User;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Role;
import com.emhc.service.OrganizationService;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;
import com.emhc.validator.UserDTOValidator;

@Controller
@RequestMapping("/student")
public class LoginController extends BaseController {

	@Autowired
	private UserService userService;
	@Autowired
	private OrganizationService organizationService;
	@Autowired
	private ProgramService programService;
	@Autowired
	UserDTOValidator validator;

	@RequestMapping(value = { "/", "/login" }, method = RequestMethod.GET)
	public ModelAndView login() {
		System.out.println("-------run to here login of student--------");

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("login auth.getName = " + auth.getName());

		ModelAndView modelAndView = new ModelAndView();
		UserDTO userDTO = new UserDTO();

		// List<Program> programs = programService.findAll();
		List<Organization> organizations = organizationService.findAll();
		// userDTO.setPrograms(programs);
		// userDTO.setProgram(programs.get(0));
		userDTO.setOrganizations(organizations);
		modelAndView.addObject("userDTO", userDTO);
		modelAndView.setViewName("student/login/login");
		return modelAndView;
	}

	@RequestMapping(value = { "/login_emhc" }, method = RequestMethod.GET)
	public ModelAndView login_emhc() {
		System.out.println("-------run to here login of student--------");

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("auth.getName = " + auth.getName());

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student/login/login_emhc");
		return modelAndView;
	}

	/*
	 * @RequestMapping(value={"/","/registration"}, method = RequestMethod.GET)
	 * public ModelAndView dspRegistration(ModelMap model, HttpSession
	 * httpSession){ ModelAndView modelAndView = new ModelAndView(); UserDTO
	 * userDTO = new UserDTO();
	 * 
	 * //List<Program> programs = programService.findAll(); List<Organization>
	 * organizations = organizationService.findAll();
	 * //userDTO.setPrograms(programs); userDTO.setOrganizations(organizations);
	 * modelAndView.addObject("userDTO", userDTO);
	 * modelAndView.setViewName("student/login/registration"); return
	 * modelAndView; }
	 */

	@RequestMapping(value = { "/registration/{orgid}" }, method = RequestMethod.GET)
	public ModelAndView dspOrganization(ModelMap model, @PathVariable("orgid") Long orgid, HttpSession httpSession) {
		ModelAndView modelAndView = new ModelAndView();
		UserDTO userDTO = new UserDTO();
		Organization organization = organizationService.getById(orgid);
		System.out.println("___________organization___________" + organization);

		if (orgid.longValue() != 0) {
			List<Program> programs = programService.getByOrganization(organization);
			userDTO.setPrograms(programs);
		}
		List<Organization> organizations = organizationService.findAll();
		userDTO.setOrganization(organization);
		userDTO.setOrganizations(organizations);
		modelAndView.addObject("userDTO", userDTO);
		modelAndView.setViewName("student/login/login");
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

			try {
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
			} catch (Exception e) {
				e.printStackTrace();

			}
		}
		return modelAndView;
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home(ModelMap model, HttpSession httpSession) {
		String rtn = "student/home";
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User emhcuser = userService.getByUsername(auth.getName());
		
		System.out.println("!!auth.getName = " + auth.getName());
		System.out.println("!!userName = " + emhcuser.getUsername());
		
		model.addAttribute("loginUser", emhcuser);
		model.addAttribute("userName", "Welcome " + emhcuser.getUsername() + " " + emhcuser.getLastname() + " ("
				+ emhcuser.getUsername() + ")");
		model.addAttribute("adminMessage", "Content Available Only for Users with Admin Role");
		
		return rtn;
	}

	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logoutPage (HttpServletRequest request, HttpServletResponse response) {

	    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    if (auth != null){    
	        new SecurityContextLogoutHandler().logout(request, response, auth);
	    }
	    return "redirect:/student/login?logout";//You can redirect wherever you want, but generally it's a good practice to show login screen again.
	}

}
