package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.emhc.model.Program;
import com.emhc.model.User;
import com.emhc.repository.UserRepository;



@Service("userService")
public class UserService{

	@Autowired
	private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public User findUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	public User getByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public User getById(Integer userid) {
		return userRepository.findOne(userid);
	}

	public List<User> getAll() {
		return userRepository.findAll();
	}
	
	public List<User> getByRoleNameNot(String roleid) {
		return userRepository.findByRoleNameNot(roleid);
	}
	
	public List<User> getByRoleName(String role) {
		return userRepository.findByRoleName(role);
	}
	
	public List<User> getByProgram(Program program){
		return userRepository.findByProgram(program);
	}
	public User saveUser(User user) {
		if(user.getUserid() == 0) { 
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		}
		
		return userRepository.save(user);
	}
	
	public User savUser(User user) {
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		
			return userRepository.save(user);
	}

    public User updatePassword(int userid, String password) {
    	User user = userRepository.findOne(userid);
    	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    	user.setPassword(passwordEncoder.encode(password));
    	
    	return saveUser(user);
    }
	
/*	@Override
	public User findUserByUsernameAndRole(User user, Role role) {
		List<Role> roles = new ArrayList<Role>();
		roles.add(role);
		return userRepository.findUserByUsernameAndRole(user, roles);
	}*/
}
