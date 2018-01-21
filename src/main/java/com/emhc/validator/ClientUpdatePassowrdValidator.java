package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.emhc.dto.ClientUpdatePassword;


@Component
public class ClientUpdatePassowrdValidator implements Validator {

    private static final Logger logger = LoggerFactory.getLogger(ClientUpdatePassowrdValidator.class);
    
 
    
 
    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(ClientUpdatePassword.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        logger.info("Validating {}", target);
        ClientUpdatePassword form = (ClientUpdatePassword) target;
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "oldpassword", "error.oldpassword", "Old PASSWORD field is mandatory");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "error.password", "New PASSWORD field is mandatory");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "confirmpassword", "error.confirmpassword", "Confirmed PASSWORD field is mandatory");
		 		        
        
        validatePasswords(errors, form);
    }

    
    private void validatePasswords(Errors errors, ClientUpdatePassword form) {
        /*//If need to enter the old password
        final Student std = studentService.getStudentByNumber(SecurityContextHolder.getContext().getAuthentication().getName());
        if (!studentService.checkIfValidOldPassword(std, passwordForm.getOldPassword())) {
            throw new InvalidOldPasswordException();
        }
        */
    	
        if (!form.getPassword().equals(form.getConfirmpassword())) {
        	logger.info("password.no_match :" + form.getPassword() + ", " + form.getConfirmpassword());
            errors.rejectValue("password", "NotMatch.resetPassword.newPasswordConfirm");
        }
    }

}
