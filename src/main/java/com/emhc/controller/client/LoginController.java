package com.emhc.controller.client;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.controller.base.BaseController;
import com.emhc.dto.ClientForgetPassword;
import com.emhc.dto.ClientResetPassword;
import com.emhc.dto.UserDTO;
import com.emhc.error.Message;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Role;
import com.emhc.model.User;
import com.emhc.service.EmailService;
import com.emhc.service.OrganizationService;
import com.emhc.service.PasswordtokenService;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;
import com.emhc.validator.ClientForgetPasswordValidator;
import com.emhc.validator.ClientResetPasswordValidator;
import com.emhc.validator.UserDTOValidator;

@Controller
@RequestMapping("/client")
public class LoginController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ScheduleController.class);

	@Autowired
	private EmailService emailService;
	@Autowired
	private UserService userService;
	@Autowired
	private OrganizationService organizationService;
	@Autowired
	private ProgramService programService;
	@Autowired
	UserDTOValidator validator;
    @Autowired
    private MessageSource messageSource;
    @Autowired
    private ClientForgetPasswordValidator passwordValidator;
    @Autowired
    private ClientResetPasswordValidator passwordUpdateValidator;
    @Autowired
    private PasswordtokenService passwordtokenService;

    @InitBinder("forgetpasswordForm")
    public void initPasswordBinder(WebDataBinder binder) {
        binder.addValidators(passwordValidator);
    }

	
    @ModelAttribute("forgetpasswordForm")
	public ClientForgetPassword createPasswordModel() {
		return new ClientForgetPassword();
	}
   
    @InitBinder("passwordUpdateForm")
    public void initPasswordUpdateBinder(WebDataBinder binder) {
        binder.addValidators(passwordUpdateValidator);
    }

	
    @ModelAttribute("passwordUpdateForm")
	public ClientResetPassword createPasswordUpdateModel() {
		return new ClientResetPassword();
	}

    
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
		modelAndView.setViewName("client/login/login");
		return modelAndView;
	}

	@RequestMapping(value = { "/login_emhc" }, method = RequestMethod.GET)
	public ModelAndView login_emhc() {
		System.out.println("-------run to here login of client--------");

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("auth.getName = " + auth.getName());

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("client/login/login_emhc");
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
	 * modelAndView.setViewName("client/login/registration"); return
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
		modelAndView.setViewName("client/login/login");
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

			modelAndView.setViewName("/client/login/login");
		} else {

			try {
				System.out.println("------run to save user-----" + userDTO.getProgram());
				validator.validate(userDTO, bindingResult);

				if (bindingResult.hasErrors()) {
					modelAndView.setViewName("/client/login/login");
					return modelAndView;
				}
				Role role = new Role();
				role.setRoleid(2);
				userDTO.setRole(role);
				LocalDate localDate = LocalDate.now();
				Date date = java.sql.Date.valueOf(localDate);
				userDTO.setCreationdate(date);

				userService.saveUser(userDTO.getUser());
				modelAndView.addObject("successMessage", "User has been registered successfully");
				modelAndView.setViewName("/client/login/login");
			} catch (Exception e) {
				e.printStackTrace();

			}
		}
		return modelAndView;
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home(ModelMap model, HttpSession httpSession) {
		String rtn = "client/home";
		
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
	
	
	@RequestMapping(value="/login/forgetPassword", method=RequestMethod.GET)
	public String dspForgetPassword() {
		LOGGER.debug("Call forgetPassword");
		return "/client/login/forgetPassword";
	}
	
    @RequestMapping(value="/login/forgetPassword", method=RequestMethod.POST)
	public String doForgetPassword(@Valid @ModelAttribute("forgetpasswordForm") ClientForgetPassword form, BindingResult bindingResult, Model model, final HttpServletRequest request) {
    	Message message = new Message();
    	String rtn = "/client/login/forgetPassword";
		String username = form.getusername();
		LOGGER.debug("Call doForgetPassword POST " + username);
    	
		try {
	    	if (bindingResult.hasErrors()) {
	            // failed validation
				message.setStatus(Message.ERROR);
				message.setMessage(messageSource.getMessage("StudentLogin.forgetPassword.validation", new Object[] {}, LocaleContextHolder.getLocale()));
				model.addAttribute("message", message);
	            return "/client/login/forgetPassword";
	        }
			
			final String token = UUID.randomUUID().toString();
			User emhcuser = userService.getByUsername(username);
			
			if (emhcuser.getUserid() > 0) {
				String url = getAppUrl(request);
				String tokenURL = url + "/client/login/resetPassword?id=" + emhcuser.getUserid() + "&token=" + token;
				
				passwordtokenService.createPasswrodtokenForUser(emhcuser, token);
				
				String from = "scjimcc@gmail.com";
				String to = emhcuser.getEmail();
				String subject = "Reset your Password!";
				String body = tokenURL;

				emailService.sendMail(from, to, subject, body);

				rtn = "/client/login/sendPasswordSuccess";
				
				message.setStatus(Message.SUCCESS);
				message.setMessage(messageSource.getMessage("StudentLogin.forgetPassword.success", new Object[] {}, LocaleContextHolder.getLocale()));
			} else {
				rtn = "/client/login/forgetPassword";
				
				LOGGER.debug("Could not find the client based on provided information - studentnumber: " + username);
				message.setStatus(Message.ERROR);
				message.setMessage(messageSource.getMessage("StudentLogin.forgetPassword.failure", new Object[] {}, LocaleContextHolder.getLocale()));
			}

		} catch(Exception e) {
			LOGGER.debug("Error in /client/login/forgetPassword of StudentLogin.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageSource.getMessage("StudentLogin.forgetPassword.error", new Object[] {}, LocaleContextHolder.getLocale()));
		}
		
		model.addAttribute("message", message);
		
		return rtn;
    }

    
    @RequestMapping(value = "/login/resetPassword", method = RequestMethod.GET)
    public String dspChangePasswordPage(final Locale locale, final Model model, @RequestParam("id") final int id, @RequestParam("token") final String token) {
        
    	LOGGER.debug("/client/login/resetPassword is the method");
    	//Clear all expired token before any operation.
    	passwordtokenService.deleteExpiredToken();
    	
    	String result = null;
    	
    	Message message = new Message();
    	
    	User emhcuser = new User();

    	try {
    		result = passwordtokenService.validatePasswordResetToken(id, token);
	    	
    		if (result != null) {
    			LOGGER.debug("Invalid password token: " + token);
				message.setStatus(Message.ERROR);
				message.setMessage(messageSource.getMessage("student.forget.failed", null, LocaleContextHolder.getLocale()));
	            model.addAttribute("message", message);

	            return "/client/login/login";
	        }
	    	
    		emhcuser = userService.getById(id);
	    	
    	} catch(Exception e) {
			LOGGER.debug("Error in /client/login/resetPassword of StudentLogin.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageSource.getMessage("StudentLogin.forgetPassword.error", new Object[] {}, LocaleContextHolder.getLocale()));
            model.addAttribute("message", message);
    	}
    	model.addAttribute("userid", emhcuser.getUserid());
    	model.addAttribute("username", emhcuser.getUsername());
    	model.addAttribute("token", token);
    	
    	//return "/client/login/index";
    	return "/client/login/resetPassword";
        
    }
	
    
    @RequestMapping(value = "/updatePassword", method = RequestMethod.POST)
    //@PreAuthorize("hasRole('READ_PRIVILEGE')")
    //@ResponseBody
    public String updateUserPassword(@Valid @ModelAttribute("passwordUpdateForm") ClientResetPassword resetpasswordForm, 
			BindingResult bindingResult, 
			Model model) {
  	LOGGER.debug("/client/updatePassword is the method");
    	Message message = new Message();
    	User emhcuser = null;
        /*//If need to enter the old password
        final Student std = studentService.getStudentByNumber(SecurityContextHolder.getContext().getAuthentication().getName());
        if (!studentService.checkIfValidOldPassword(std, passwordForm.getOldPassword())) {
            throw new InvalidOldPasswordException();
        }
        */
    	try {
    		
	    	if (bindingResult.hasErrors()) {
	            // failed validation
	    		emhcuser = userService.getByUsername(resetpasswordForm.getUsername());
	    		model.addAttribute("username", resetpasswordForm.getUsername());
	    		model.addAttribute("user", emhcuser);
	    		model.addAttribute("token", resetpasswordForm.getToken());
	    		
				message.setStatus(Message.ERROR);
				message.setMessage(messageSource.getMessage("StudentLogin.updateUserPassword.validation", new Object[] {}, LocaleContextHolder.getLocale()));
				model.addAttribute("message", message);
				model.addAttribute("passwordUpdateForm", resetpasswordForm);
				
	            return "/client/login/resetPassword";
	        }
	
	    	emhcuser = userService.updatePassword(resetpasswordForm.getUserid(), resetpasswordForm.getPassword());
	    	
	    	//Delete the token after password reset
	    	if(emhcuser != null && emhcuser.getUserid() >0 && emhcuser.getPassword().length() > 0) {
	    		passwordtokenService.deleteUsedToken(emhcuser, resetpasswordForm.getToken());
	    		LOGGER.debug("The used token has been deleted");
	    	}
	    	
	    	message.setStatus(Message.SUCCESS);
	    	message.setMessage(messageSource.getMessage("StudentLogin.resetPassword.success", new Object[] {}, LocaleContextHolder.getLocale()));
    	} catch(Exception e) {
    		
			LOGGER.debug("Error in /client/updatePassword of StudentLogin.  Error: " + e.getMessage());
			message.setStatus(Message.ERROR);
			message.setMessage(messageSource.getMessage("StudentLogin.resetPassword.error", new Object[] {}, LocaleContextHolder.getLocale()));
    	}
    	model.addAttribute("message", message);
    	//model.addAttribute("student", std);
    	
        return "redirect:login";
    }
    

    private String getAppUrl(HttpServletRequest request) {
    	if(request.isSecure()) {
    		return "https://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    	} else {
    		return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    	}
    }
    
    @RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logoutPage (HttpServletRequest request, HttpServletResponse response) {

	    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    if (auth != null){    
	        new SecurityContextLogoutHandler().logout(request, response, auth);
	    }
	    return "redirect:/client/login?logout";//You can redirect wherever you want, but generally it's a good practice to show login screen again.
	}
}
