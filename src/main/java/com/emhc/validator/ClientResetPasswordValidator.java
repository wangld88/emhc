package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.ClientResetPassword;
import com.emhc.model.User;
import com.emhc.service.UserService;


@Component
public class ClientResetPasswordValidator implements Validator {

    private static final Logger LOGGER = LoggerFactory.getLogger(ClientResetPasswordValidator.class);
    
    private final UserService userService;

    
    @Autowired
    public ClientResetPasswordValidator(UserService studentService) {
        this.userService = studentService;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(ClientResetPassword.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        LOGGER.debug("Validating {}", target);
        ClientResetPassword form = (ClientResetPassword) target;
        validateStudentNumber(errors, form);
        validatePasswords(errors, form);
    }

    private void validateStudentNumber(Errors errors, ClientResetPassword form) {
    	String username = form.getUsername();
    	
    	LOGGER.debug("Should not come to here");
    	
    	if(username != null && username.length() > 0 && username.trim().length() == 0) {
    		errors.rejectValue("studentNumber", "NotProvide.studentPasswordForm.studentNumber");
    	}
    	//ValidationUtils.rejectIfEmptyOrWhitespace(errors, "studentNumber", "StudentPasswordUpdateFormValidator.studentNumber.not_provide");
    	User user = userService.getByUsername(username);
    	
        if (user == null) {
        	
        	if(username.length() > 0) {
            	
                errors.rejectValue("username", "NotExist.studentPasswordForm.studentNumber");
        	}
        }    	
    }
    
    private void validatePasswords(Errors errors, ClientResetPassword form) {
        if (!form.getPassword().equals(form.getPasswordRepeated())) {
        	LOGGER.debug("password.no_match :" + form.getPassword() + ", " + form.getPasswordRepeated());
            errors.rejectValue("password", "NotMatch.studentActivationForm.passwordRepeated");
        }
    }

}
