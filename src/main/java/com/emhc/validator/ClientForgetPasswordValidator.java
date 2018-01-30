package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.ClientForgetPassword;
import com.emhc.model.User;
import com.emhc.service.UserService;



@Component
public class ClientForgetPasswordValidator implements Validator {

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    private static final Logger logger = LoggerFactory.getLogger(ClientForgetPasswordValidator.class);
    private final UserService userService;

    @Autowired
    public ClientForgetPasswordValidator(UserService UserService) {
        this.userService = UserService;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(ClientForgetPassword.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
    	logger.debug("Validating {}", target);
        ClientForgetPassword form = (ClientForgetPassword) target;
        validateUsername(errors, form);
        validateEmail(errors, form);
    }

    private void validateUsername(Errors errors, ClientForgetPassword form) {
    	String username = form.getusername();
    	
    	//if(username != null && username.length() > 0 && username.trim().length() == 0) {
    	if(username == null || username.length() == 0) {	
    	errors.rejectValue("username", "NotProvide.forgetPasswordForm.username");
    	}
    }
    
    private void validateEmail(Errors errors, ClientForgetPassword userForm) {
    	
    	String email=userForm.getEmail();
    	User userExists  = userService.findUserByEmail(userForm.getEmail());
    	
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
            
        }/* else if (!userForm.getEmail().matches(EMAIL_REGEX)) {
        	logger.debug("email not in right format");
            errors.rejectValue("email", "WrongFormat.forgetPasswordForm.email");*/
        }
    }

    

