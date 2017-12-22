package com.emhc.validator;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.ProgramForm;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.service.ProgramService;


/**
 * 
 * Validator for ProgramForm
 * 
 * @author KJC
 *
 */
@Component
public class ProgramFormValidator implements Validator {

    @Autowired
    private ProgramService programService;
    
    @Override
	public boolean supports(Class<?> clazz) {

		return clazz.equals(ProgramForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		
		ProgramForm form = (ProgramForm) target;
		
		validateName(form, errors);
		
	}

	private void validateName(ProgramForm form, Errors errors) {
		String name = form.getName();
		long programid = form.getProgramid();
		Organization org = form.getOrganization();
		
		if(name == null || name.trim().isEmpty()) {
			errors.rejectValue("Name", "NotProvide.programForm.name");
		} else {
			if(programid != 0) {
				List<Program> programs = programService.getByNameOrganization(name.trim(),org);
				if(programs != null && programs.size() > 0) {
					errors.rejectValue("Name", "Duplicate.programForm.name");
				}
			}
		}
	}

}
