package com.emhc.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.StudentPasswordForm;
import com.emhc.model.User;
import com.emhc.service.UserService;



@Component
public class StudentPasswordFormValidator implements Validator {

    private static final Logger LOGGER = LoggerFactory.getLogger(StudentPasswordFormValidator.class);
    private final UserService UserService;

    @Autowired
    public StudentPasswordFormValidator(UserService UserService) {
        this.UserService = UserService;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(StudentPasswordForm.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        LOGGER.debug("Validating {}", target);
        StudentPasswordForm form = (StudentPasswordForm) target;
        validateStudentNumber(errors, form);
        validateEmail(errors, form);
    }

    private void validateStudentNumber(Errors errors, StudentPasswordForm form) {
    	String stdnum = form.getStudentNumber();
    	
    	if(stdnum != null && stdnum.length() > 0 && stdnum.trim().length() == 0) {
    		errors.rejectValue("studentNumber", "NotProvide.studentActivationForm.studentNumber");
    	}
    }
    
    private void validateEmail(Errors errors, StudentPasswordForm form) {
/*    	User emhcuser = UserService.getStudentByNumber(form.getStudentNumber());
    	//LOGGER.debug("student password: "+std.getPwd()+", student Num: "+std.getStudentnumber());
        //if (UserService.getStudentByNumber(form.getStudentNumber()).isPresent()) {
    	//try {
        if (std == null) {
        	LOGGER.debug("student.notexists");
            errors.rejectValue("studentNumber", "NotExist.passwordForm.studentNumber");
        }
        else if (std.getPwd() != null && "N".equals(std.getActive())) {
        	LOGGER.debug("student.notactivated");
        	errors.rejectValue("studentNumber", "NotActivated.passwordForm.studentNumber");
        }
        else if (std.getLearnlinkemail() == null) {
        	errors.rejectValue("email", "NotExist.passwordForm.email");
        }
        else if (!std.getLearnlinkemail().equals(form.getEmail())) {
        	LOGGER.debug("email.no_match");
        	errors.rejectValue("email", "NotMatch.passwordForm.email");
        }
*/    		
    	/*} catch (Exception e) {
    		e.printStackTrace();
    	}*/
    }
}
