package com.emhc.security;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import com.emhc.model.EmhcUser;
import com.emhc.model.Role;

public class LoginStudent extends User {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private EmhcUser emhc;
    public LoginStudent(EmhcUser emhc) {
        super(emhc.getEmail(), emhc.getPassword(), AuthorityUtils.createAuthorityList("CLIENT"));
/*
//        super(emhc.getEmail(), emhc.getPassword(), AuthorityUtils.createAuthorityList(emhc.getRole().toString()));
      //  System.out.println(super.getUsername()+", "+super.getAuthorities().toString());
       System.out.println("-------------role name is :" + emhc.getRole().toString());
*/		
		//super(emhc.getUsername(), emhc.getPassword(), AuthorityUtils.createAuthorityList((emhc.getRole().getName())));
		System.out.println("emhc.getUsername(): "+emhc.getUsername() + ", Password:" +emhc.getPassword()+", role: "+emhc.getRole().getName());
    	
    	
    	this.emhc = emhc;
    }

    public EmhcUser getClient() {
        return emhc;
    }
    public EmhcUser getUser() {
        return emhc;
    }

    public int getId() {
        return emhc.getUserid();
    }

    
    
 }
