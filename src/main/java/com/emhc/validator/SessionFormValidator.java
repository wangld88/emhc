package com.emhc.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.SessionForm;


@Component
public class SessionFormValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return clazz.equals(SessionForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		SessionForm form = (SessionForm) target;

		validateName(form, errors);
	}

	private void validateName(SessionForm form, Errors errors) {
		String name = form.getName();
		
		if(name == null || name.trim().isEmpty()) {
			errors.rejectValue("Name", "NotProvide.organizationForm.name");
		} else {
		}
	}
}
