package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.UserDTO;
import com.emhc.model.User;
import com.emhc.service.UserService;



@Component
public class UserDTOValidator implements Validator {

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    private static final Logger logger = LoggerFactory.getLogger(UserDTOValidator.class);
    private final UserService userService;

    @Autowired
    public UserDTOValidator(UserService UserService) {
        this.userService = UserService;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(UserDTO.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
    	logger.debug("Validating {}", target);
        UserDTO form = (UserDTO) target;
    	System.out.println("------run to validateUsername-----------------------------" + form.getUsername());
    	System.out.println("------run to validateUsername-----------------------------");
    	System.out.println("------run to validateUsername-----------------------------");
    	System.out.println("------run to validateUsername-----------------------------");
    	System.out.println("------run to validateUsername-----------------------------");
        validateUsername(errors, form);
        //validateEmail(errors, form);
    }

    private void validateUsername(Errors errors, UserDTO form) {
    	String username = form.getUsername();
    	
    	if(username == null || username.length() == 0) {	
    	errors.rejectValue("username", "NotProvide.forgetPasswordForm.username");
    	}
    	else{
    		User userExist = userService.getByUsername(username);
    		if (userExist != null){
    			errors.rejectValue("username", "Notexist.forgetPasswordForm.username");
    		 		}
    	} 
    		
    }
    
    private void validateEmail(Errors errors, UserDTO userForm) {
    	
    	String email=userForm.getEmail();
    	User userExists  = userService.findUserByEmail(email);
    	String usrnam=userForm.getUsername();
    	
    	//check email blank and format
    	if (email==null||email.length()==0){
        	errors.rejectValue("email", "NotProvide.forgetPasswordForm.email");
         	}    
    	else if (!email.matches(EMAIL_REGEX)) {
        errors.rejectValue("email", "WrongFormat.forgetPasswordForm.email");
        
    }           
    	//check email exist
    	else if (userExists == null) {
            errors.rejectValue("email", "Notexist.forgetPasswordForm.email");
            
    	}
        //email match username 
    	else {
    		
    		String usrname = userExists.getUsername();
    	
    	if(!usrnam.equals(usrname)){
            	errors.rejectValue("email", "Notmatch.forgetPasswordForm.email");
            }
            
            
        }/* else if (!userForm.getEmail().matches(EMAIL_REGEX)) {
        	logger.debug("email not in right format");
            errors.rejectValue("email", "WrongFormat.forgetPasswordForm.email");
        }*/
    }
}

    

