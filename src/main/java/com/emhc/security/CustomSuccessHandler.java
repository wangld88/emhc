package com.emhc.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
 

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;


@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
 
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomSuccessHandler.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
 
    @Override
    protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException {
        System.out.println("CustomSuccessHandler is called: " + request.getServletPath());
    	LOGGER.debug("CustomSuccessHandler is called: " + request.getRemoteHost());
    	String targetUrl = determineTargetUrl(authentication, request.getServletPath());
        System.out.println("CustomSuccessHandler is called, targetUrl: "+targetUrl);
    	LOGGER.debug("CustomSuccessHandler is called, targetUrl: " + targetUrl);
 
        if (response.isCommitted()) {
        	LOGGER.debug("Can't redirect");
            return;
        }
 
        redirectStrategy.sendRedirect(request, response, targetUrl);
    }
 
    /*
     * This method extracts the roles of currently logged-in user and returns
     * appropriate URL according to his/her role.
     */
    protected String determineTargetUrl(Authentication authentication, String path) {
        String url = "";
 
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
 
        List<String> roles = new ArrayList<String>();
        System.out.println("--------------------"+authorities.toString());
        for (GrantedAuthority a : authorities) {
            roles.add(a.getAuthority());
            System.out.println("--------------------"+a.getAuthority().toString()+"------------------");
       }
 
        if (isPractice(roles)) {
            url = "/practice";
        } else if (isAdmin(roles)) {
            url = "/admin/home";
        } else if (isSuper(roles)) {
            url = "/admin/home";
        } else if (isStudent(roles)) {
        	url = "/student/home";
        } else if (isClient(roles)) {
        	url = "/student/home";
        } else {
        	if(path.contains("admin")) {
        		url = "/admin/login";
        	} else {
        		url = "/student/home";
        	}
        }
 
        return url;
    }
 
    private boolean isSuper(List<String> roles) {
        if (roles.contains("SUPER_ADMIN")) {
            return true;
        }
        return false;
    }
 
    private boolean isAdmin(List<String> roles) {
        if (roles.contains("ADMIN")) {
            return true;
        }
        return false;
    }
 
    private boolean isPractice(List<String> roles) {
        if (roles.contains("PRACTICE_ADMIN")) {
            return true;
        }
        return false;
    }
 
    private boolean isStudent(List<String> roles) {
        if (roles.contains("STUDENT")) {
            return true;
        }
        return false;
    }
    private boolean isClient(List<String> roles) {
        if (roles.contains("CLIENT")) {
            return true;
        }
        return false;
    }

    public void setRedirectStrategy(RedirectStrategy redirectStrategy) {
        this.redirectStrategy = redirectStrategy;
    }
 
    protected RedirectStrategy getRedirectStrategy() {
        return redirectStrategy;
    }
 
}