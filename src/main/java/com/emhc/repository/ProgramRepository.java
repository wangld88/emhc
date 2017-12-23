package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Organization;
import com.emhc.model.Program;

public interface ProgramRepository extends JpaRepository<Program, Integer> {
	Program findByName(String name);
	Program findByProgramid(int id);
	public List<Program> findByOrganization(Organization organization);
	public List<Program> findByOrganization_organizationid(long organizationid);
	public List<Program> findByNameAndOrganization(String name, Organization organization);
}
