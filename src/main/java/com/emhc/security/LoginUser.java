package com.emhc.security;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;



/*
 * 
 */
public class LoginUser extends User {
	
	private static final long serialVersionUID = 1L;
	private com.emhc.model.User emhc;
   
	
	public LoginUser(com.emhc.model.User emhc) {

		super(emhc.getUsername(), emhc.getPassword(), AuthorityUtils.createAuthorityList(emhc.getRoles()));

    	this.emhc = emhc;
    }

    public com.emhc.model.User getClient() {
        return emhc;
    }
    public com.emhc.model.User getUser() {
        return emhc;
    }

    public int getId() {
        return emhc.getUserid();
    }
    
 }
