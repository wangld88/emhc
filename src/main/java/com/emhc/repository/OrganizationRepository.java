package com.emhc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Organization;

public interface OrganizationRepository extends JpaRepository<Organization, Integer> {
	 Organization findByEmail(String email);
}
