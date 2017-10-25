package com.emhc.controller.student;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.dto.StudentProfileUpdate;
import com.emhc.model.EmhcUser;
import com.emhc.model.Program;
import com.emhc.security.LoginStudent;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;
@Controller
@RequestMapping("/student")

public class ProfileController {
	private static final Logger LOGGER = LoggerFactory.getLogger(StudentProfileUpdate.class);

	@Autowired
	private UserService userService;
	@Autowired
	private ProgramService programService;


	@RequestMapping(value={"/profile"}, method = RequestMethod.GET)
	public String profile(Model model){

		System.out.println("-------run to profile here-------");
		String rtn = "/student/updateProfile";

		try{
	
			StudentProfileUpdate form = new StudentProfileUpdate();
			EmhcUser emhcuser = getPrincipal();
			LOGGER.debug("$$$$ SP status: " + emhcuser.getUserid());
			form.setUsername(emhcuser.getUsername());
			form.setUserid(emhcuser.getUserid());
			form.setFirstname(emhcuser.getFirstname());
			form.setLastname(emhcuser.getLastname());
			form.setEmail(emhcuser.getEmail());
			form.setProgramyear(emhcuser.getProgramyear());
			form.setProgram(emhcuser.getProgram());
			List<Program> programs = programService.findAll();
			form.setPrograms(programs);
			model.addAttribute("studentProfileUpdate", form);
			

			/*		EmhcUser user = getPrincipal();
		model.addAttribute("emhcuser", user);
		LOGGER.debug("$$$$ SP status: " + user.getUserid());
		StudentProfileUpdate form = new StudentProfileUpdate();
		form.setEmail(user.getEmail());
		form.setFirstname(user.getFirstname());
		model.addAttribute("studentProfileUpdate", form);
*/		
		}
		catch (Exception e){
			e.printStackTrace();
		}
		
		return rtn;

		
		
/*		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		StudentProfileUpdate StudentProfileUpdate = new StudentProfileUpdate();
		StudentProfileUpdate  = userService.findUserByEmail(auth.getName());
		System.out.println("-------password is " + StudentProfileUpdate.getPassword().toString());
		
		List<Program> programs = programService.findAll();
//		List<Organization> organization = organizationService.findAll();
		StudentProfileUpdate.setPrograms(programs);
		modelAndView.addObject("StudentProfileUpdate", StudentProfileUpdate);

		modelAndView.setViewName("student/updateProfile");
		return modelAndView;
*/	}
	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	public ModelAndView updateProfile(@Valid StudentProfileUpdate StudentProfileUpdate, BindingResult bindingResult) {

		ModelAndView modelAndView = new ModelAndView();

		if (bindingResult.hasErrors()) {
			System.out.println("------run to has error-----");

			modelAndView.setViewName("/student/updateProfile");
		} else {
			
			try{
				System.out.println("------run to update user-----" + StudentProfileUpdate.getProgram());
		         
		        if (bindingResult.hasErrors()) {
		        	modelAndView.setViewName("/student/updateProfile");
		            return modelAndView;
		        }
		        System.out.println("----------run to here--------------");
				System.out.println("-------password is " + StudentProfileUpdate.getPassword().toString());
				System.out.println("--------role is " + StudentProfileUpdate.getRole().toString());
				userService.saveUser(StudentProfileUpdate.getUser());
				modelAndView.addObject("successMessage", "User has been updated successfully");
				modelAndView.setViewName("/student/updateProfile");
			}
			catch(Exception e){
				e.printStackTrace();
				
			}
		}
		return modelAndView;
	}
	
    private EmhcUser getPrincipal(){
    	EmhcUser user = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        if (principal instanceof LoginStudent) {
            user = ((LoginStudent)principal).getClient();
        } else {
            user = userService.findUserByEmail("");
        }
        return user;
    }
	
}
