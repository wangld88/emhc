package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.emhc.dto.TemplateForm;


@Component
public class TemplateFormValidator implements Validator {

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    private static final Logger logger = LoggerFactory.getLogger(TemplateFormValidator.class);
    
	//@Autowired
	//private UserService userService;
	
	@Override
	public boolean supports(Class<?> clazz) {
		
		return clazz.equals(TemplateForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		TemplateForm form = (TemplateForm) target;

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "subject", "error.subject", "Subject is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "sender", "error.sender", "Sender is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "recipient", "error.recipient", "Recipient is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "content", "error.content", "Content is required.");

		//validateEmail(form, errors);
	}

    /*private void validateEmail(TemplateForm userForm, Errors errors) {
    	User userExists  = userService.findUserByEmail(userForm.getEmail());
        if (userExists != null) {
            errors.reject("email.exists", "User with this email already exists");
        } else if (!userForm.getEmail().matches(EMAIL_REGEX)) {
        	logger.debug("email not in right format");
            errors.rejectValue("email", "WrongFormat.studentProfileForm.email");
        }
    }*/
}
