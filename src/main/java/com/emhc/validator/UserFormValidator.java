package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.emhc.dto.UserForm;
import com.emhc.model.User;
import com.emhc.service.UserService;


@Component
public class UserFormValidator implements Validator {

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    private static final Logger logger = LoggerFactory.getLogger(UserFormValidator.class);
    
	@Autowired
	private UserService userService;
	
	@Override
	public boolean supports(Class<?> clazz) {
		
		return clazz.equals(UserForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		UserForm form = (UserForm) target;

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "error.username", "User name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstname", "error.firstname", "First name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastname", "error.lastname", "Last name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "error.email", "Email is required.");

		validateEmail(form, errors);
	}

    private void validateEmail(UserForm userForm, Errors errors) {
    	User userExists  = userService.findUserByEmail(userForm.getEmail());
        if (userExists != null) {
            errors.reject("email.exists", "User with this email already exists");
        } else if (!userForm.getEmail().matches(EMAIL_REGEX)) {
        	logger.info("email not in right format");
            errors.rejectValue("email", "WrongFormat.studentProfileForm.email");
        }
    }
}
