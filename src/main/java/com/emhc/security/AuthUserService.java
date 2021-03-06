package com.emhc.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.emhc.model.User;
import com.emhc.service.UserService;


@Component
public class AuthUserService implements UserDetailsService 	{

	@Autowired
	UserService userService;
	
	private final Logger logger = LoggerFactory.getLogger(AuthUserService.class);
	

    @Override
    public UserDetails loadUserByUsername(String username) 
    		throws UsernameNotFoundException {
    	
    	logger.info("Student Auth Begins. Locating User in DB {}", username);
		
        User emhcuser = userService.getByUsername(username);
        
        if(emhcuser == null) {
        	logger.info("Client is not found!!!!!!!!!!!!!!");
        	throw new UsernameNotFoundException(String.format("User with stdnum=%s was not found", username));
        }
                //.orElseThrow(() -> new UsernameNotFoundException(String.format("User with stdnum=%s was not found", stdnum))); //1.8
        return new LoginUser(emhcuser);
    }
}
