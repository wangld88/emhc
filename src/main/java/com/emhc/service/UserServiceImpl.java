package com.emhc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.emhc.model.User;
import com.emhc.repository.UserRepository;



@Service("userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public User findUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public void saveUser(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		System.out.println(bCryptPasswordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}

/*	@Override
	public User findUserByUsernameAndRole(User user, Role role) {
		List<Role> roles = new ArrayList<Role>();
		roles.add(role);
		return userRepository.findUserByUsernameAndRole(user, roles);
	}*/
}
