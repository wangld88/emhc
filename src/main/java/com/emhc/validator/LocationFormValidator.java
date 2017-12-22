package com.emhc.validator;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.emhc.dto.LocationForm;
import com.emhc.model.Organization;
import com.emhc.model.Location;
import com.emhc.service.LocationService;


/**
 * 
 * Validator for LocationForm
 * 
 * @author KJC
 *
 */
@Component
public class LocationFormValidator implements Validator {

    @Autowired
    private LocationService locationService;
    
    @Override
	public boolean supports(Class<?> clazz) {

		return clazz.equals(LocationForm.class);
	}

	@Override
	public void validate(Object target, Errors errors) {
		
		LocationForm form = (LocationForm) target;
		
		validateName(form, errors);
		
	}

	private void validateName(LocationForm form, Errors errors) {
		String name = form.getName();
		long locationid = form.getLocationid();
		Organization org = form.getOrganization();
		
		if(name == null || name.trim().isEmpty()) {
			errors.rejectValue("Name", "NotProvide.locationForm.name");
		} else {
			if(locationid != 0) {
				List<Location> locations = locationService.getByNameOrganization(name.trim(),org);
				if(locations != null && locations.size() > 0) {
					errors.rejectValue("Name", "Duplicate.locationForm.name");
				}
			}
		}
	}

}
