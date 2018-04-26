package com.emhc.controller.admin;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.emhc.controller.base.BaseController;
import com.emhc.dto.SessionForm;
import com.emhc.error.Message;
import com.emhc.model.Session;
import com.emhc.model.Location;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.validator.SessionFormValidator;


@Controller
@RequestMapping("/admin")
public class AdminSessionController extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(AdminSessionController.class);

	private static final String STATUS_INCOMPLETED = "incompleted";
	private static final String STATUS_COMPLETED = "completed";

    @Autowired
    private SessionFormValidator sessionFormValidator;

    @InitBinder("sessionForm")
    public void initBinder(WebDataBinder binder) {
    	binder.addValidators(sessionFormValidator);
    }

    @ModelAttribute("sessionForm")
    public SessionForm createDTO() {
    	return new SessionForm();
    }


	@RequestMapping(value="/session", method=RequestMethod.GET)
	public String dspSession(Model model) {
		String rtn = "/admin/session";

		User user = getPrincipal();

		List<Organization> orgs = organizationService.findAll();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			model.addAttribute("sessionForm", new SessionForm());
			model.addAttribute("orgs", orgs);
		}

		return rtn;
	}


	@RequestMapping(value="/session/{sessionid}", method=RequestMethod.GET)
	public String dspSession(@PathVariable("sessionid") Integer sessionid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/admin/session";

		User user = getPrincipal();
		SessionForm form = new SessionForm();
		List<Program> programs = new ArrayList<>();
		List<Location> locations = new ArrayList<>();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			Session session = sessionService.getById(sessionid);
			form = new SessionForm(session);
			programs = programService.getByOrganization(session.getProgram().getOrganization());
			locations = locationService.getByOrganization(session.getProgram().getOrganization());
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}

		List<Organization> orgs = organizationService.findAll();

		model.addAttribute("orgs", orgs);
		model.addAttribute("programs", programs);
		model.addAttribute("locations", locations);
		model.addAttribute("sessionForm", form);

		return rtn;
	}


	@RequestMapping(value="/session/org/{orgid}", method=RequestMethod.GET)
	public String dspOrganization(@PathVariable("orgid") Long orgid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/admin/session";

		User user = getPrincipal();
		SessionForm form = new SessionForm();

		List<Program> programs = new ArrayList<>();
		List<Location> locations = new ArrayList<>();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			programs = programService.getByOrganizationId(orgid);
			locations = locationService.getByOrganizationid(orgid);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		List<Organization> orgs = organizationService.findAll();
		form.setOrganizationid(orgid);
		model.addAttribute("orgs", orgs);
		model.addAttribute("sessionForm", form);
		model.addAttribute("programs", programs);
		model.addAttribute("locations", locations);

		return rtn;
	}


	@RequestMapping(value="/session", method=RequestMethod.POST)
	public String doSession(@Valid @ModelAttribute("sessionForm") SessionForm form,
		BindingResult bindingResult, Model model, HttpSession httpSession, final RedirectAttributes ra) {

		//logger.info("Processing updateProfile form={}, bindingResult={}", form, bindingResult);
		String rtn = "/admin/sessions";

		User user = getPrincipal();
		Message message = new Message();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			if (bindingResult.hasErrors()) {

				List<ObjectError> errors = bindingResult.getAllErrors();
				String msg = messageHandler.get("Header.sessionForm.validation") + "<br />";

				for(ObjectError i: errors) {
					if(i instanceof FieldError) {
						FieldError fieldError = (FieldError) i;
						msg += messageHandler.get(fieldError.getCode()) + "<br />";
					}
				}

				List<Organization> orgs = organizationService.findAll();
				List<Program> programs = programService.getByOrganizationId(form.getOrganizationid());
				List<Location> locations = locationService.getByOrganizationid(form.getOrganizationid());
				model.addAttribute("orgs", orgs);
				model.addAttribute("sessionForm", form);
				model.addAttribute("programs", programs);
				model.addAttribute("locations", locations);

				message.setStatus(Message.ERROR);
				message.setMessage(msg);
				int sessionid = form.getSessionid();
				model.addAttribute("message", message);
				if(sessionid == 0) {
					return "/admin/session";
				} else {
					ra.addFlashAttribute("errMessage", message);
					return "redirect: session/" + sessionid;
				}
			} else {
				logger.info("Errors: "+bindingResult.getErrorCount());;
			}

			Session session = form.getSession();
			if(form.getProgramid() != 0) {
				session.setProgram(programService.getById(form.getProgramid()));
			}
			if(form.getLocationid() != 0) {
				session.setLocation(locationService.getById(form.getLocationid()));
			}

			session.setCreatedby(user.getUserid());
			session.setCreationdate(Calendar.getInstance().getTime());
			session.setStatus(STATUS_INCOMPLETED);

			session = sessionService.save(session);

			List<Session> sessions = sessionService.getAll();

			model.addAttribute("sessions", sessions);
		}

		return rtn;
	}


	@RequestMapping(value="/session/{sessionid}", method=RequestMethod.POST)
	public String deleteSession(@PathVariable("sessionid") Integer sessionid, Model model, HttpSession httpSession) {
		String rtn = "/admin/sessions";

		User user = getPrincipal();

		if(user == null) {
			rtn = "/admin/login";
		} else {

			try {
				sessionService.delete(sessionid);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}

		return "redirect:" + rtn;
	}


	@RequestMapping(value="/sessions", method=RequestMethod.GET)
	public String dspSessions(Model model) {
		String rtn = "/admin/sessions";
		logger.info("dspSessions is called");
		User user = getPrincipal();

		if(user == null) {
			rtn = "/admin/login";
		} else {

			List<Session> sessions = sessionService.getAll();

			model.addAttribute("sessions", sessions);
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
