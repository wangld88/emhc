package com.emhc.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.emhc.model.Role;



public interface RoleRepository extends JpaRepository<Role, Integer> {
	 
	Role findByName(String name);
	Role findByRoleid(int id);
	List<Role> findByNameNot(String name);
 
}
