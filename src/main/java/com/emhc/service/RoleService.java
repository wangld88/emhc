package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.Role;
import com.emhc.repository.RoleRepository;



@Service("roleService")
public class RoleService{

	@Autowired
	private RoleRepository roleRepository;
	
	public Role findRoleByName(String name) {
		return roleRepository.findByName(name);
	}

	public List<Role> getAll() {
		return roleRepository.findAll();
	}
	public List<Role> findByNameNot(String name){
		return roleRepository.findByNameNot(name);
	}

	public Role saveProgram(Role role) {
		return roleRepository.save(role);
	}

	public Role findById(int id) {
		return roleRepository.findByRoleid(id);
	}
}
