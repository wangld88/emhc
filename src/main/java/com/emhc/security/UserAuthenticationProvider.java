package com.emhc.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import com.emhc.model.User;
import com.emhc.repository.UserRepository;


public class UserAuthenticationProvider extends DaoAuthenticationProvider {

	@Autowired
    private UserRepository userRepository;
    
    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException {
    	
    	User emhcuser = userRepository.findByUsername(auth.getName());
    	
        if ((emhcuser == null)) {
            throw new BadCredentialsException("Invalid username or password");
        }
        
        final Authentication result = super.authenticate(auth);
        
        return new UsernamePasswordAuthenticationToken(new LoginUser(emhcuser), result.getCredentials(), result.getAuthorities());

    }
    
    
    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}
