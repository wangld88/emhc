package com.emhc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.User;
import com.emhc.model.Registration;
import com.emhc.repository.RegistrationRepository;

@Service("registrationService")
public class RegistrationService {

	@Autowired
	private RegistrationRepository registrationRepository;

	public Registration findByUser(User user) {

		return registrationRepository.findByUser(user);
	}

	public Registration saveRegistration(Registration register) {
		return registrationRepository.save(register);
	}

}
