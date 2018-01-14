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
    
	@Override
	public boolean supports(Class<?> clazz) {
		
		return clazz.equals(TemplateForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		TemplateForm form = (TemplateForm) target;

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "subject", "NotEmpty.templateForm.subject");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "sender", "NotEmpty.templateForm.sender");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "recipient", "NotEmpty.templateForm.recipient");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "textcontent", "NotEmpty.templateForm.content");

		validateEmail(form.getSender(), errors);
	}

    private void validateEmail(String email, Errors errors) {
    	
        if (!email.matches(EMAIL_REGEX)) {
            errors.rejectValue("sender", "WrongFormat.templateForm.sender");
        }
    }
}
