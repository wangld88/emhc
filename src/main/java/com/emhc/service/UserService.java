package com.emhc.service;

import com.emhc.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	//public User findUserByUsernameAndRole(User user, Role role);
	public void saveUser(User user);
}
