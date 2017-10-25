package com.emhc.security;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import com.emhc.model.EmhcUser;

public class LoginStudent extends User {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private EmhcUser emhc;

    public LoginStudent(EmhcUser emhc) {
        super(emhc.getEmail(), emhc.getPassword(), AuthorityUtils.createAuthorityList("CLIENT"));
        //System.out.println(super.getUsername()+", "+super.getAuthorities().toString());
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
