package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;


import com.emhc.dto.UserForm;



@Component
public class UserFormValidator implements Validator {

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    private static final Logger logger = LoggerFactory.getLogger(UserFormValidator.class);
    
	/*@Autowired
	private UserService userService;*/
	
	@Override
	public boolean supports(Class<?> clazz) {
		
		return clazz.equals(UserForm.class);
	}

	@Override
	public void validate(Object target,Errors errors) {
		
		logger.info("Moderator User Validating {} started", target);
		
		UserForm form = (UserForm) target;

		ValidationUtils.rejectIfEmptyOrWhitespace(errors,"username","error.username","User name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstname","error.firstname", "First name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastname","error.lastname","Last name is required.");
		//ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "error.email", "Email is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password","error.password","Password is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "programyear","error.programyear","Programyear is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "phone", "error.phone","Phone is required.");
		/*validateUserName(form, errors);
		validateFirstname(form, errors);
		validateLastname(form, errors);
		validatePassword(form, errors);
		validateProgramyear(form, errors);
		validatePhone(form, errors);
		*/validateEmail(form, errors);
		validateOrgemail(form,errors);
		
	}

    private void validateEmail(UserForm form,Errors errors) {
    	
    	String email = form.getEmail();

    	if (email == null || email.length() == 0) {
        	logger.info("email.no_provide :" + email);
            errors.rejectValue("email", "NotProvide.ClientProfileUpdate.email");
        } else if (!email.matches(EMAIL_REGEX)) {
        	logger.info("email not in right format");
            errors.rejectValue("email", "WrongFormat.ClientProfileUpdate.email");
        }
    		/*User userExists  = userService.findUserByEmail(form.getEmail());
        if (userExists != null) {
            errors.rejectValue("email.exists", "User with this email already exists");
            }*/
    }
        private void validateOrgemail(UserForm form,Errors errors) {
        	String orgemail = form.getOrgemail();

        	if (orgemail == null || orgemail.length() == 0) {
        		logger.info("orgemail.no_provide :" + orgemail);
        		errors.rejectValue("orgemail", "NotProvide.ClientProfileUpdate.orgemail");
        	} else if (!orgemail.matches(EMAIL_REGEX)) {
        		logger.info("orgemail not in right format");
        		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
        	}
}

       /* private void validateFirstname(UserForm form,Errors errors) {
        	
        	String firstname = form.getFirstname();

        	if (firstname == null || firstname.length() == 0) {
        		errors.rejectValue("username", "NotProvide.ClientProfileUpdate.orgemail");
        	} else if (!orgemail.matches(EMAIL_REGEX)) {
        		logger.info("orgemail not in right format");
        		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
        	}
}

        
}

       private void validateLastname(UserForm form,Errors errors) {
        	
        	String lastname = form.getLastname();

        	if (lastname == null || lastname.length() == 0) {
        		errors.rejectValue("username", "NotProvide.ClientProfileUpdate.orgemail");
        	} else if (!orgemail.matches(EMAIL_REGEX)) {
        		logger.info("orgemail not in right format");
        		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
        	}
}

        
}       private void validatePassword(UserForm form,Errors errors) {
	
	String password = form.getPassword();

	if (password == null || password.length() == 0) {
		errors.rejectValue("username", "NotProvide.ClientProfileUpdate.orgemail");
	} else if (!orgemail.matches(EMAIL_REGEX)) {
		logger.info("orgemail not in right format");
		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
	}
}


}       private void validateProgramyear(UserForm form,Errors errors) {
	
	String programyear = form.getProgramyear()+"";

	if (programyear == null || programyear.length() == 0) {
		errors.rejectValue("username", "NotProvide.ClientProfileUpdate.orgemail");
	} else if (!orgemail.matches(EMAIL_REGEX)) {
		logger.info("orgemail not in right format");
		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
	}
}


}       private void validatePhone(UserForm form,Errors errors) {
	
	String phone = form.getPhone();

	if (phone == null || phone.length() == 0) {
		errors.rejectValue("username", "NotProvide.ClientProfileUpdate.orgemail");
	} else if (!orgemail.matches(EMAIL_REGEX)) {
		logger.info("orgemail not in right format");
		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
	}
}

/*
}       private void validateUserName(UserForm form,Errors errors) {
	
	String username = form.getUsername();

	if (username == null || username.length() == 0) {
		errors.rejectValue("username", "NotProvide.ClientProfileUpdate.orgemail");
	/*} else if (!orgemail.matches(EMAIL_REGEX)) {
		logger.info("orgemail not in right format");
		errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
	}
}


}*/
}