package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Session;
import com.emhc.repository.SessionRepository;


@Service
public class SessionService {

	@Autowired
	private SessionRepository sessionRepository;
	
	
	public Session getById(int sessionid) {
		return sessionRepository.findBySessionid(sessionid);
	}
	
	public List<Session> getByProgram(Program program) {
		return sessionRepository.findByProgram(program);
	}
	
	public List<Session> getByOrganization(Organization organization) {
		return sessionRepository.findByProgram_organization(organization);
	}
	
	public List<Session> getByOrganizationid(long organizationid) {
		return sessionRepository.findByProgram_organization_organizationid(organizationid);
	}
	
	public List<Session> getAll() {
		return sessionRepository.findAll();
	}
	
	public Session save(Session session) {
		return sessionRepository.save(session);
	}
}
