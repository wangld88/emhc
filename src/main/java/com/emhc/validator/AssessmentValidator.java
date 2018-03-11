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
        validateDTOblank(errors,form);
        validateAnswerDTO(errors, form);
			  
			// input string conatains numeric values only  
    }

    private void validateDTOblank(Errors errors, AnswerDTO form) {
    	
    	if (form.getButton01()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group1");
    	}
/*    	if (form.getButton02()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group2");
    	}
    	if (form.getButton03()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group3");
    	}
    	if (form.getButton04()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group4");
    	}
    	if (form.getButton05()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group5");
    	}
    	if (form.getButton06()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group6");
    	}
    	if (form.getButton07()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group7");
    	}
    	if (form.getButton08()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group8");
    	}
    	if (form.getButton09()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group9");
    	}
    	if (form.getButton10()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group10");
    	}
    	if (form.getButton11()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group11");
    	}
    	if (form.getButton12()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group12");
    	}
    	if (form.getButton13()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group13");
    	}
    	if (form.getButton14()==null){
    		errors.rejectValue("answer",null,null,"You need to select 1 option from group14");
    	}
*/    	    }	
    
    
    private void validateAnswerDTO(Errors errors, AnswerDTO form) {
    	 
    	
    	logger.info("-----"+form.getAnswer1()+"--------"+form.getButton01());
    	if ((form.getButton01()=="Yes")||(form.getAnswer1()=="")){
    	logger.info("-----"+form.getAnswer1()+"--------"+form.getButton01());
    	 errors.rejectValue("answer",null,null,"Answer1 should not be blank.");
    	}
    
/*
    	if ((form.getButton02()=="Yes")||(form.getAnswer2().length()==0)){
    		 errors.rejectValue("answer",null,null,"Answer2 should not be blank.");
    	}
    	
    	if ((form.getButton03()=="Yes")||(form.getAnswer3()=="")){
    		errors.rejectValue("answer",null,null,"Answer3 should not be blank.");
    	}
    	
    	if ((form.getButton04()=="Yes")||(form.getAnswer4()=="")){
    		errors.rejectValue("answer",null,null,"Answer4 should not be blank.");
    	}
    	
    	if ((form.getButton05()=="Yes")||(form.getAnswer5()=="")){
    		errors.rejectValue("answer",null,null,"Answer5 should not be blank.");
    	}
    	
    	if ((form.getButton06()=="Yes")||(form.getAnswer6()=="")){
    		errors.rejectValue("answer",null,null,"Answer6 should not be blank.");
    	}
    	
    	if ((form.getButton07()=="Yes")||(form.getAnswer7()=="")){
    		errors.rejectValue("answer",null,null,"Answer7 should not be blank.");
    	}
    	
    	if ((form.getButton08()=="Yes")||(form.getAnswer8()=="")){
    		errors.rejectValue("answer",null,null,"Answer8 should not be blank.");
    	}
    	
    	if ((form.getButton09()=="Yes")||(form.getAnswer9()=="")){
    		errors.rejectValue("answer",null,null,"Answer9 should not be blank.");
    	}
    	
    	if ((form.getButton10()=="Yes")||(form.getAnswer10()=="")){
    		errors.rejectValue("answer",null,null,"Answer10 should not be blank.");
    	}
    	if ((form.getButton11()=="Yes")||(form.getAnswer11()=="")){
    		errors.rejectValue("answer",null,null,"Answer11 should not be blank.");
    	}
    	if ((form.getButton12()=="Yes")||(form.getAnswer12()=="")){
    		errors.rejectValue("answer",null,null,"Answer12 should not be blank.");
    	}
    	if ((form.getButton13()=="Yes")||(form.getAnswer13()=="")){
    		errors.rejectValue("answer",null,null,"Answer13 should not be blank.");
    	}
    	if ((form.getButton14()=="Yes")||(form.getAnswer14()=="")){
    		errors.rejectValue("answer",null,null,"Answer14 should not be blank.");
    	}
*/    }
    	
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
				
				//if(form.getDeclaredMethod(mtn, noparams).invoke(form) =="Yes"){*/
					
			       

			
   }

