package com.emhc.validator;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.AnswerDTO;

@Component
public class AssessmentValidator implements Validator {

	Class<?> noparams[] = {};
    private static final Logger logger = LoggerFactory.getLogger(AssessmentValidator.class);


    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(AnswerDTO.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
    	
    	logger.info("Assessment Validating {} started", target);
        AnswerDTO form = (AnswerDTO) target;
		validateAnswerDTO(errors, form);
			  
			// input string conatains numeric values only  
    }

    
    private void validateAnswerDTO(Errors errors, AnswerDTO form) {
    	
    	if (form.getButton01().length()==0||form.getButton02().length()==0){
    		errors.rejectValue("button",null,null,"You need to select 1 option from group1");
    	}
    	if (form.getButton01()=="Yes"||form.getAnswer1().length()==0){
    		logger.info("-----"+form.getAnswer1()+"--------"+form.getButton01());
    		 errors.rejectValue("answer",null,null,"Answer1 should not be blank.");
    	}
    

    	if (form.getButton02()=="Yes"||form.getAnswer2().length()==0){
    		 errors.rejectValue("answer",null,null,"Answer2 should not be blank.");
    	}
    	
    	if (form.getButton03()=="Yes"||form.getAnswer3().length()==0){
    		errors.rejectValue("answer",null,null,"Answer3 should not be blank.");
    	}
    	
    	if (form.getAnswer4().length()==0||form.getButton04()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer4 should not be blank.");
    	}
    	
    	if (form.getAnswer5().length()==0||form.getButton05()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer5 should not be blank.");
    	}
    	
    	if (form.getAnswer6().length()==0||form.getButton06()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer6 should not be blank.");
    	}
    	
    	if (form.getAnswer7().length()==0||form.getButton07()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer7 should not be blank.");
    	}
    	
    	if (form.getAnswer8().length()==0||form.getButton08()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer8 should not be blank.");
    	}
    	
    	if (form.getAnswer9().length()==0||form.getButton09()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer9 should not be blank.");
    	}
    	
    	if (form.getAnswer10().length()==0||form.getButton10()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer10 should not be blank.");
    	}
    	if (form.getAnswer11().length()==0||form.getButton11()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer11 should not be blank.");
    	}
    	if (form.getAnswer12().length()==0||form.getButton12()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer12 should not be blank.");
    	}
    	if (form.getAnswer13().length()==0||form.getButton13()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer13 should not be blank.");
    	}
    	if (form.getAnswer14().length()==0||form.getButton14()=="Yes"){
    		errors.rejectValue("answer",null,null,"Answer14 should not be blank.");
    	}
    	
    	/*Class<?> c = Class.forName(" com.emhc.dto.AnswerDTO");   
			
			        Method m[] = c.getDeclaredMethods();   
			
			        AnswerDTO methobj = new AnswerDTO();   
			
			        for (int i = 0; i < m.length; i++) {   
			  			         		   
			        Object retobj = m[i].invoke(methobj, null);   
			
			          //for(int i = 1; i < 15; i++){
				//String mtn = String.format("getButton%1$02d" , i);
				
			 	/*Object c1 = Class.forName(mtn).newInstance();
				Class<?> c = (Class<?>)c1;
				logger.info("assessment validate"+c);
				
				//if(form.getDeclaredMethod(mtn, noparams).invoke(form) =="Yes"){
					
			       */

			}
		
	}