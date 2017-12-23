package com.emhc.service;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.stereotype.Service;

import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.repository.ProgramRepository;



@Service("programService")
public class ProgramService {

	@Autowired
	private ProgramRepository programRepository;
	
	public Program getById(int programid) {
		return programRepository.findByProgramid(programid);
	}
	public Program findProgramByName(String name) {
		return programRepository.findByName(name);
	}
	public List <Program> findAll(){
		return programRepository.findAll();
	}
	
	public List<Program> getByOrganization(Organization org) {
		return programRepository.findByOrganization(org);
	}
	
	public List<Program> getByOrganizationId(long orgid) {
		return programRepository.findByOrganization_organizationid(orgid);
	}
	
	public List<Program> getByNameOrganization(String name, Organization org) {
		return programRepository.findByNameAndOrganization(name, org);
	}
	
	public Program saveProgram(Program program) {
		return programRepository.save(program);
	}
    
    public String print(Program object, Locale locale) {
        return (object != null ? Integer.toString(object.getProgramid()) : "");
    }

    

    public Program parse(String text, Locale locale) throws ParseException {
        Integer id = Integer.valueOf(text);
        return programRepository.findByProgramid(id);
    }
    
   
}
