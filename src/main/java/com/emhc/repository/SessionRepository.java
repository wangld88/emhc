package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Session;


public interface SessionRepository extends JpaRepository<Session, Integer> {

	public Session findBySessionid(int sessionid);
	
	public List<Session> findByProgram_organization(Organization organization);
	
	public List<Session> findByProgram_organization_organizationid(long organizationid);
	
	public List<Session> findByProgram(Program program);

	public List<Session> findAll();
	
}
