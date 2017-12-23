package com.emhc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.User;
import com.emhc.model.Registration;
import com.emhc.model.Schedule;

public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
	public Registration findByUser(User user);
}
