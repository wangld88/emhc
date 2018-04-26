package com.emhc.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.SecretForm;


@Component
public class SecretFormValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return clazz.equals(SecretForm.class);
	}


	@Override
	public void validate(Object target, Errors errors) {
		SecretForm form = (SecretForm) target;

		validateCode(form, errors);
	}


	private void validateCode(SecretForm form, Errors errors) {
		String code = form.getCode();

		if(code == null || code.trim().isEmpty()) {
			errors.rejectValue("Code", "NotProvide.secretForm.code");
		} else {
		}
	}
}
