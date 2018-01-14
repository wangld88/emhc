package com.emhc.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.dto.RegistrationForm;
import com.emhc.model.Answer;
import com.emhc.model.Registration;
import com.emhc.model.User;


/**
 * This method is to prepare the content data for email templates.
 * 
 * @author Jerry
 *
 */
@Service
public class EmailContentService {

	@Autowired
	private UserService userService;
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private RegistrationService registrationService;
	
	@Autowired
	private AnswerService answerService;
	
	private static final Logger logger = LoggerFactory.getLogger(EmailContentService.class);
			
	
	public RegistrationForm getRegistrationInfo(Integer userid) {
		
		logger.info("Method - getRegistrationInfo is invoked");
		
		RegistrationForm form = new RegistrationForm(questionService.getAll());
		
		User user = userService.getById(userid);
		
		Registration regist = registrationService.findByUser(user);
				
		Answer answer = answerService.getByUser(user);
		
		form.setUser(user);

		form.setRegistration(regist);
		
		form.setAnswer(answer);

		return form;
	}
	
	
	/*public Emailconsent getEmailconsent(Long studentid, Long lotterystageid) {
		return emailconsentService.getEmailconsent(studentid, lotterystageid);
	}
	
	
	public Emailconsent getEmailwithdrawal(Long studentid, Long lotterystageid) {
		return emailconsentService.getEmailwithdrawal(studentid, lotterystageid);
	}*/
}
