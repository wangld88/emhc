package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.User;
import com.emhc.model.Program;
import com.emhc.model.Registration;
import com.emhc.repository.RegistrationRepository;

@Service("registrationService")
public class RegistrationService {

	@Autowired
	private RegistrationRepository registrationRepository;

	public Registration findById(int registrationid) {

		return registrationRepository.findByRegistrationid(registrationid);
	}

	public Registration findByUser(User user) {

		return registrationRepository.findByUser(user);
	}

	public List<Registration> getByProgramid(int programid) {
		return registrationRepository.findBySchedule_session_program_programid(programid);
	}

	public List<Registration> getByPrograms(List<Program> programs) {
		return registrationRepository.findBySchedule_session_programIn(programs);
	}

	public List<Registration> getByOrganizationid(long organizationid) {
		return registrationRepository.findBySchedule_session_program_organization_organizationid(organizationid);
	}

	public Registration saveRegistration(Registration register) {
		return registrationRepository.save(register);
	}

}
