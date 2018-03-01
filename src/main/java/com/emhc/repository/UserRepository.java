package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.emhc.model.Program;
import com.emhc.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	 User findByEmail(String email);
	 User findByUsername(String username);
	// @Query(value="select users from User users where users.roleid !=?1",nativeQuery=true)
	 //List<User> findByRoleIdNot(int roleid);
	 List <User> findByRoleNameNot(String role);
	 List <User> findByRoleName(String role);
	 List <User> findByProgram(Program program);    
}
