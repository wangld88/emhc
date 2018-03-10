package com.emhc.controller.client;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.emhc.dto.AnswerDTO;
import com.emhc.dto.SessionForm;
import com.emhc.error.Message;
import com.emhc.model.Answer;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.service.AnswerService;
import com.emhc.service.UserService;
import com.emhc.validator.AssessmentValidator;

@Controller
@RequestMapping("/client")
public class AssessmentController {
	private static final Logger logger = LoggerFactory.getLogger(ProfileController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private UserService userService;
	@Autowired
	private AnswerService answerService;

	@Autowired
	private AssessmentValidator assessmentValidator;

	@InitBinder("answerDTO")
	public void initAssessmentBinder(WebDataBinder binder) {
		binder.addValidators(assessmentValidator);
	}

    @ModelAttribute("answerDTO")
    public AnswerDTO createDTO() {
    	return new AnswerDTO();
    }

	@RequestMapping(value = "/assessmentconfirm", method = RequestMethod.GET)
	public String assessmentconfirm(Model model) {

		String rtn = "client/assessmentconfirm";
		model.addAttribute("loginUser", getPrincipal());

		return rtn;
	}
	@RequestMapping(value = "/assessment", method = RequestMethod.GET)
	public String assessment(Model model) {

		String rtn = "client/assessment";
		User user = getPrincipal();
		Answer answer = answerService.getByUserid(user.getUserid());
		AnswerDTO form = new AnswerDTO(answer);
		
		/*if (answer.getAnswerid()==0){
			AnswerDTO form = new AnswerDTO();
			model.addAttribute("answerDTO", form);
			}
				
		else {AnswerDTO form = new AnswerDTO(answer);
			model.addAttribute("answerDTO", form);
				}*/
		
		
		model.addAttribute("loginUser", getPrincipal());
		model.addAttribute("answerDTO", form);
		
		return rtn;
	}

	@RequestMapping(value = "/assessment", method = RequestMethod.POST)
	public String createNewAssessment(@Valid @ModelAttribute("answerDTO") AnswerDTO form, BindingResult bindingResult,
			Model model) {

		String rtn = "client/assessment";

		Message message = new Message();

		//User user = getPrincipal();
		//Answer answer = answerService.getByUserid(user.getUserid());
		//AnswerDTO newform = new AnswerDTO();
		// newform.setAnswer1(answer1);
		//model.addAttribute("answerDTO", newform);
		//if (answer.getAnswerid()==0){
			//model.addAttribute("answerDTO", form);
		//return rtn;	
		//}
		
		if (bindingResult.hasErrors()) {

			logger.info("Assessment form validation failed!!!!!!!!");
			List<ObjectError> errors = bindingResult.getAllErrors();
			String msg = messageSource.getMessage("Assessment.validation", new Object[] {},
					LocaleContextHolder.getLocale()) + "<br />";
			for (ObjectError i : errors) {
				if (i instanceof FieldError) {
					FieldError fieldError = (FieldError) i;
					msg += messageSource.getMessage(fieldError, LocaleContextHolder.getLocale()) + "<br />";
				}
			}
			message.setStatus(Message.ERROR);
			message.setMessage(msg);
			model.addAttribute("loginUser", getPrincipal());
			model.addAttribute("message", message);

			return rtn;

		} else {

			try {

				User user = getPrincipal();
				Answer answer = answerService.getByUserid(user.getUserid());
				answer.setAnswerid(answer.getAnswerid());
				answer.setUser(getPrincipal());
				answer.setAnswer1(form.getAnswer1());
				answer.setAnswer2(form.getAnswer2());
				answer.setAnswer3(form.getAnswer3());
				answer.setAnswer4(form.getAnswer4());
				answer.setAnswer5(form.getAnswer5());
				answer.setAnswer6(form.getAnswer6());
				answer.setAnswer7(form.getAnswer7());
				answer.setAnswer8(form.getAnswer8());
				answer.setAnswer9(form.getAnswer9());
				answer.setAnswer10(form.getAnswer10());
				answer.setAnswer11(form.getAnswer11());
				answer.setAnswer12(form.getAnswer12());
				answer.setAnswer13(form.getAnswer13());
				answer.setAnswer14(form.getAnswer14());
				answer.setButton01(form.getButton01());
				answer.setButton02(form.getButton02());
				answer.setButton03(form.getButton03());
				answer.setButton04(form.getButton04());
				answer.setButton05(form.getButton05());
				answer.setButton06(form.getButton06());
				answer.setButton07(form.getButton07());
				answer.setButton08(form.getButton08());
				answer.setButton09(form.getButton09());
				answer.setButton10(form.getButton10());
				answer.setButton11(form.getButton11());
				answer.setButton12(form.getButton12());
				answer.setButton13(form.getButton13());
				answer.setButton14(form.getButton14());			
				answerService.saveAnswer(answer);
				
				message.setStatus(Message.SUCCESS);
				message.setMessage(messageSource.getMessage("Assessment.success", new Object[] {},
						LocaleContextHolder.getLocale()));
			
			} catch (Exception e) {
				e.printStackTrace();

			}
		}
		//model.addAttribute("answerDTO", form);
		model.addAttribute("loginUser", getPrincipal());
		model.addAttribute("message", message);
		
		return rtn;
	}

	private User getPrincipal() {
		User user = null;
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		if (principal instanceof LoginUser) {
			user = ((LoginUser) principal).getClient();
		} else {
			user = userService.getByUsername("");
		}
		return user;
	}
}
