package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.User;
import com.emhc.model.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
	
	public Registration findByUser(User user);
	public List<Registration> findBySchedule_session_program_programid(Integer programid);
	public List<Registration> findBySchedule_session_program_organization_organizationid(long organizationid);
	
}
