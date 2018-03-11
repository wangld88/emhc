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
		if(answer != null){
			AnswerDTO form = new AnswerDTO(answer);
			
			if (answer.getAnswer1()!=null){
				form.setAnswer1(answer.getAnswer1());
				form.setButton01("Yes");
				}
				else
				{
				form.setButton01("No");
				}
			
			if (answer.getAnswer2()!=null){
				form.setAnswer2(answer.getAnswer2());
				form.setButton02("Yes");
				}
				else
				{
				form.setButton02("No");
				}
			
			if (answer.getAnswer3()!=null){
				form.setAnswer3(answer.getAnswer3());
				form.setButton03("Yes");
				}
				else
				{
				form.setButton03("No");
				}
			
			if (answer.getAnswer4()!=null){
				form.setAnswer4(answer.getAnswer4());
				form.setButton04("Yes");
				}
				else
				{
				form.setButton04("No");
				}
			
			if (answer.getAnswer5()!=null){
				form.setAnswer5(answer.getAnswer5());
				form.setButton05("Yes");
				}
				else
				{
				form.setButton05("No");
				}
			
			if (answer.getAnswer6()!=null){
				form.setAnswer6(answer.getAnswer6());
				form.setButton06("Yes");
				}
				else
				{
				form.setButton06("No");
				}
			
			if (answer.getAnswer7()!=null){
				form.setAnswer7(answer.getAnswer7());
				form.setButton07("Yes");
				}
				else
				{
				form.setButton07("No");
				}
			
			if (answer.getAnswer8()!=null){
				form.setAnswer8(answer.getAnswer8());
				form.setButton08("Yes");
				}
				else
				{
				form.setButton08("No");
				}
			
			if (answer.getAnswer9()!=null){
				form.setAnswer9(answer.getAnswer9());
				form.setButton09("Yes");
				}
				else
				{
				form.setButton09("No");
				}
			
			if (answer.getAnswer10()!=null){
				form.setAnswer10(answer.getAnswer10());
				form.setButton10("Yes");
				}
				else
				{
				form.setButton10("No");
				}
			
			if (answer.getAnswer11()!=null){
				form.setAnswer11(answer.getAnswer11());
				form.setButton11("Yes");
				}
				else
				{
				form.setButton11("No");
				}
			
			if (answer.getAnswer12()!=null){
				form.setAnswer12(answer.getAnswer12());
				form.setButton12("Yes");
				}
				else
				{
				form.setButton12("No");
				}
			
			if (answer.getAnswer13()!=null){
				form.setAnswer13(answer.getAnswer13());
				form.setButton13("Yes");
				}
				else
				{
				form.setButton13("No");
				}
			
			if (answer.getAnswer14()!=null){
				form.setAnswer14(answer.getAnswer14());
				form.setButton14("Yes");
				}
				else
				{
				form.setButton14("No");
				}
			
			model.addAttribute("answerDTO", form);
			
		}
		
		/*if (answer.getAnswerid()==0){
			AnswerDTO form = new AnswerDTO();
			model.addAttribute("answerDTO", form);
			}
				
		else {AnswerDTO form = new AnswerDTO(answer);
			model.addAttribute("answerDTO", form);
				}*/
		
		
		model.addAttribute("loginUser", getPrincipal());
		model.addAttribute("answer", answer);
		
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
				Answer answer1 = new Answer();
				answer1.setUser(user);
				//				answer.setAnswerid(answer.getAnswerid());
//				answer.setUser(user);
				if(answer == null)
				{
					
					answer1.setAnswer1(form.getAnswer1());
					answer1.setAnswer2(form.getAnswer2());
					answer1.setAnswer3(form.getAnswer3());
					answer1.setAnswer4(form.getAnswer4());
					answer1.setAnswer5(form.getAnswer5());
					answer1.setAnswer6(form.getAnswer6());
					answer1.setAnswer7(form.getAnswer7());
					answer1.setAnswer8(form.getAnswer8());
					answer1.setAnswer9(form.getAnswer9());
					answer1.setAnswer10(form.getAnswer10());
					answer1.setAnswer11(form.getAnswer11());
					answer1.setAnswer12(form.getAnswer12());
					answer1.setAnswer13(form.getAnswer13());
					answer1.setAnswer14(form.getAnswer14());
					answerService.saveAnswer(answer1);}
				else
				{	
					answer.setUser(user);
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
					answerService.saveAnswer(answer);
				}
				
			
				
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
