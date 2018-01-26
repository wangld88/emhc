package com.emhc.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.emhc.dto.ClientProfileUpdate;


@Component
public class ClientProfileUpdateValidator implements Validator {

    private static final Logger logger = LoggerFactory.getLogger(ClientProfileUpdateValidator.class);

    private Pattern pattern;  
    private Matcher matcher;  

	String ProgramYear_PATTERN = "[0-9]+";  

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
//    private static final String ID_PATTERN = "[0-9]+";  
//    private static final String STRING_PATTERN = "[a-zA-Z]+";  
    private static final String MOBILE_PATTERN = "[0-9]{10}";  
    
    /*private final StudentService studentService;

    @Autowired
    public StudentProfileUpdateValidator(StudentService studentService) {
        this.studentService = studentService;
    }*/

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(ClientProfileUpdate.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        logger.info("StudentProfileUpdate Validating {} started", target);
        ClientProfileUpdate form = (ClientProfileUpdate) target;
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "error.username", "User name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstname", "error.firstname", "First name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastname", "error.lastname", "Last name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "programyear", "error.programyear", "Program Year is required.");  
		validateEmail(errors, form);
		validatePhone(errors, form);
		validateOrgemail(errors, form);
		validateProgramYear(errors, form);
			  
			// input string conatains numeric values only  
    }

    
    private void validateEmail(Errors errors, ClientProfileUpdate form) {
    	String email = form.getEmail();

        if (email == null || email.length() == 0) {
        	logger.info("email.no_provide :" + email);
            errors.rejectValue("email", "NotProvide.ClientProfileUpdate.email");
        } else if (!email.matches(EMAIL_REGEX)) {
        	logger.info("email not in right format");
            errors.rejectValue("email", "WrongFormat.ClientProfileUpdate.email");
        }
    		
    }
    // orgemail validator
    private void validateOrgemail(Errors errors, ClientProfileUpdate form) {
    	String orgemail = form.getOrgemail();

        if (orgemail == null || orgemail.length() == 0) {
        	logger.info("orgemail.no_provide :" + orgemail);
            errors.rejectValue("orgemail", "NotProvide.ClientProfileUpdate.orgemail");
        } else if (!orgemail.matches(EMAIL_REGEX)) {
        	logger.info("orgemail not in right format");
            errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
        }
    		
    }
    
    private void validatePhone(Errors errors, ClientProfileUpdate form) {
 // phone number no provide return
    	 if ( form.getPhone()== null || form.getPhone().length() == 0) {
         	logger.info("phone.no_provide :" + form.getPhone());
             errors.rejectValue("phone", "NotProvide.ClientProfileUpdate.phone");
    	 }
    // phone number validation  
     if (!(form.getPhone() != null && form.getPhone().isEmpty())) {  
     pattern = Pattern.compile(MOBILE_PATTERN);  
     matcher = pattern.matcher(form.getPhone());  
     if (!matcher.matches()) {  
      errors.rejectValue("phone", "WrongFormat.ClientProfileUpdate.phone");  
     }  
    }
    }
    private void validateProgramYear(Errors errors, ClientProfileUpdate form) {
    
    
	  if (Integer.toString(form.getProgramyear()) != null) {  
		   pattern = Pattern.compile(ProgramYear_PATTERN);  
		   matcher = pattern.matcher(Integer.toString(form.getProgramyear()));  
		   
		   if (!matcher.matches()) {  
		    errors.rejectValue("programyear", "programyear.incorrect", "Enter a numeric value");  
		   }  
		   
	  }
	}

}
