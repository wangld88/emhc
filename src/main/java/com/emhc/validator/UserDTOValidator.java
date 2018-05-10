package com.emhc.validator;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.emhc.dto.ClientProfileUpdate;
import com.emhc.dto.ClientUpdatePassword;
import com.emhc.dto.UserDTO;
import com.emhc.model.Program;
import com.emhc.model.User;
import com.emhc.service.ProgramService;
import com.emhc.service.UserService;



@Component
public class UserDTOValidator implements Validator {

	private Pattern pattern;
    private Matcher matcher;

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
   // private static final String ProgramYear_PATTERN = "[0-9]+";
	private static final String MOBILE_PATTERN = "[0-9]{10}";

    private static final Logger logger = LoggerFactory.getLogger(UserDTOValidator.class);
    private final UserService userService;

    @Autowired
    public UserDTOValidator(UserService UserService) {
        this.userService = UserService;
    }
    @Autowired
	private ProgramService programService;

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(UserDTO.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
    	logger.debug("Validating {}", target);
        UserDTO form = (UserDTO) target;
        logger.debug("------run to validateUsername-----------------------------" + form.getUsername());
    	ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "error.username", "User name is required.");
    	ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstname", "error.firstname", "First name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastname", "error.lastname", "Last name is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "programyear", "error.programyear", "Program Year is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "error.password", "Password is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "error.email", "email is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "program", "error.program", "Program is required.");
		//ValidationUtils.rejectIfEmptyOrWhitespace(errors, "orgemail", "error.orgemail", "Organization email is required.");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "phone", "error.phone", "Phone is required.");
		validateUsername(errors, form);
        validateEmail(errors, form);
        //validateOrgemail(errors, form);
 //       validatePhone(errors, form);
        validateProgramYear(errors, form);
        validatePasswords(errors, form);
        validatePrograms(errors, form);
    }

    private void validateUsername(Errors errors, UserDTO form) {
    	String username = form.getUsername();

    	if(username == null || username.length() == 0) {
    	errors.rejectValue("username", "NotProvide.forgetPasswordForm.username");
    	}
    	else{
    		User userExist = userService.getByUsername(username);
    		if (userExist != null){
    			errors.rejectValue("username", null,null, "Username is exist");
    		 		}
    	}

    }

    private void validateEmail(Errors errors, UserDTO userForm) {

    	String email=userForm.getEmail();
    	User userExists  = userService.findUserByEmail(email);
    	//String usrnam=userForm.getUsername();

    	//check email blank and format
    	if (email==null||email.length()==0){
        	errors.rejectValue("email", "NotProvide.forgetPasswordForm.email");
         	}
    	else if (!email.matches(EMAIL_REGEX)) {
        errors.rejectValue("email", "WrongFormat.forgetPasswordForm.email");

    }
    	//check email exist
    	else if (userExists != null) {
            errors.rejectValue("email", null,null,"email is exist");

    	}
        //email match username
    	/*else {

    		String usrname = userExists.getUsername();

    	if(!usrnam.equals(usrname)){
            	errors.rejectValue("email", "Notmatch.forgetPasswordForm.email");
            }


        } else if (!userForm.getEmail().matches(EMAIL_REGEX)) {
        	logger.debug("email not in right format");
            errors.rejectValue("email", "WrongFormat.forgetPasswordForm.email");
        }*/
    }
    private void validateOrgemail(Errors errors, UserDTO userForm) {
    	String orgemail = userForm.getOrgemail();

        if (orgemail == null || orgemail.length() == 0) {
        	logger.info("orgemail.no_provide :" + orgemail);
            errors.rejectValue("orgemail", "NotProvide.ClientProfileUpdate.orgemail");
        } else if (!orgemail.matches(EMAIL_REGEX)) {
        	logger.info("orgemail not in right format");
            errors.rejectValue("orgemail", "WrongFormat.ClientProfileUpdate.orgemail");
        }

    }
    private void validatePhone(Errors errors, UserDTO userForm) {
    	 // phone number no provide return
    	    	 if ( userForm.getPhone()== null || userForm.getPhone().length() == 0) {
    	         	logger.info("phone.no_provide :" + userForm.getPhone());
    	             errors.rejectValue("phone", "NotProvide.ClientProfileUpdate.phone");
    	    	 }
    	    // phone number validation
    	     if (!(userForm.getPhone() != null && userForm.getPhone().isEmpty())) {
    	     pattern = Pattern.compile(MOBILE_PATTERN);
    	     matcher = pattern.matcher(userForm.getPhone());
    	     if (!matcher.matches()) {
    	      errors.rejectValue("phone", "WrongFormat.ClientProfileUpdate.phone");
    	     }
    	    }
    	    }
    private void validatePasswords(Errors errors,  UserDTO form) {

    		//password confirm match
        if (!form.getPassword().equals(form.getConfirmpassword())) {
        	logger.info("password.no_match :" + form.getPassword() + ", " + form.getConfirmpassword());
            errors.rejectValue("password", "NotMatch.resetPassword.newPasswordConfirm");
        }
    }

    private void validatePrograms(Errors errors, UserDTO userForm) {

    	Program program =userForm.getProgram();
    	int programid = program.getProgramid();

		if (programid==0){
        	errors.rejectValue("program", null,null,"Please select program");
         	}
		  }

    private void validateProgramYear(Errors errors, UserDTO userForm) {

    	    int programyear = userForm.getProgramyear();

    	    if (programyear==0){
            	errors.rejectValue("programyear", null,null,"Please select programyear");
             	}

    		 /* if (Integer.toString(userForm.getProgramyear()) != null) {
    			   pattern = Pattern.compile(ProgramYear_PATTERN);
    			   matcher = pattern.matcher(Integer.toString(userForm.getProgramyear()));

    			   if (!matcher.matches()) {
    			    errors.rejectValue("programyear", "programyear.incorrect", "Enter a numeric value");
    			   }*/

    		  }
}