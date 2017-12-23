package com.emhc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	 User findByEmail(String email);
	 User findByUsername(String username);
}
