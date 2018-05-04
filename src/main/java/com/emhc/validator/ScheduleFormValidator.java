package com.emhc.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.ScheduleForm;
import com.emhc.dto.SessionForm;


@Component
public class ScheduleFormValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return clazz.equals(ScheduleForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		ScheduleForm form = (ScheduleForm) target;

		validateName(form, errors);
	}

	private void validateName(ScheduleForm form, Errors errors) {
	
		int sessionid = form.getSessionid();
		
		if (sessionid==0) {
			errors.rejectValue("sessionid",null,null, "Please select session");
		}
		/*String name = form.getName();
		
		if(name == null || name.trim().isEmpty()) {
			errors.rejectValue("Name", "NotProvide.organizationForm.name");
		} else {
		}*/
	}
}
