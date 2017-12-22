package com.emhc.dto;

import com.emhc.model.Organization;
import com.emhc.model.Program;

public class ProgramForm {

	private int programid;

	private String name;
	
	private Organization organization;

	public ProgramForm() {
		
	}
	
	public ProgramForm(Program program) {
		this.programid = program.getProgramid();
		this.name = program.getName();
		this.organization = program.getOrganization();
	}

	public int getProgramid() {
		return programid;
	}

	public void setProgramid(int programid) {
		this.programid = programid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Organization getOrganization() {
		return organization;
	}

	public void setOrganization(Organization organization) {
		this.organization = organization;
	}
	
	public Program getProgram() {
		Program program = new Program();
		
		program.setProgramid(programid);
		program.setName(name);
		program.setOrganization(organization);
		
		return program;
	}
}
