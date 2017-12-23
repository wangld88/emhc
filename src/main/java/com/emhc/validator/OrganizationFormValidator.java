package com.emhc.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.OrganizationForm;
import com.emhc.model.Organization;
import com.emhc.service.OrganizationService;


/**
 * 
 * Validator
 * 
 * @author KJC
 *
 */
@Component
public class OrganizationFormValidator implements Validator {

    private static final String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";

    @Autowired
    private OrganizationService organizationService;
    
    @Override
	public boolean supports(Class<?> clazz) {

		return clazz.equals(OrganizationForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		
		OrganizationForm form = (OrganizationForm) target;
		
		validateName(form, errors);
		validateDomain(form, errors);
		validateEmail(form, errors);
		
	}

	private void validateName(OrganizationForm form, Errors errors) {
		String name = form.getName();
		long orgid = form.getOrganizationid();
		
		if(name == null || name.trim().isEmpty()) {
			errors.rejectValue("Name", "NotProvide.organizationForm.name");
		} else {
			if(orgid == 0) {
				Organization org = organizationService.getByName(name.trim());
				if(org != null) {
					errors.rejectValue("Name", "Duplicate.organizationForm.name");
				}
			}
		}
	}

	private void validateDomain(OrganizationForm form, Errors errors) {
		String domain = form.getDomain();
		
		if(domain == null || domain.trim().isEmpty()) {
			errors.rejectValue("Domain", "NotProvide.organizationForm.domain");
		}
	}
	
	private void validateEmail(OrganizationForm form, Errors errors) {
		String email = form.getEmail();
		
		if (email != null && !email.trim().isEmpty() && !email.matches(EMAIL_REGEX)) {
            errors.rejectValue("email", "WrongFormat.organizationForm.email");
        }
	}
}
