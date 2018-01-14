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
 
	private static final Logger logger = LoggerFactory.getLogger(CustomSuccessHandler.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
 
    @Override
    protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException {
        
        logger.info("CustomSuccessHandler is called: " + request.getRemoteHost());
    	String targetUrl = determineTargetUrl(authentication, request.getServletPath());
        
        logger.info("CustomSuccessHandler is called, targetUrl: " + targetUrl);
 
        if (response.isCommitted()) {
        	logger.info("Can't redirect");
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
		logger.info("current authenticated user's role: "+authorities.toString());
		
		for(GrantedAuthority a : authorities) {
			roles.add(a.getAuthority());
		}
 
        if(isModerator(roles)) {
            url = "/moderator/home";
        } else if(isAdmin(roles)) {
        	if(path.contains("admin")) {
        		url = "/admin/home";
        	} else if(path.contains("client")) {
        		url = "/client/login";
        	} else {
        		url = "/admin/login";
        	}
        } else if(isSuper(roles)) {
        	if(path.contains("admin")) {
        		url = "/admin/home";
        	} else if(path.contains("client")) {
        		url = "/client/login";
        	} else {
        		url = "/admin/login";
        	}
        } else if(isStudent(roles)) {
        	if(path.contains("client")) {
        		url = "/client/home";
        	} else if(path.contains("admin")) {
        		url = "/admin/login";
        	} else {
        		url = "/client/login";
        	}
        } else if(isClient(roles)) {
        	if(path.contains("client")) {
        		url = "/client/home";
        	} else if(path.contains("admin")) {
        		url = "/admin/login";
        	} else {
        		url = "/client/login";
        	}
        } else {
        	if(path.contains("admin")) {
        		url = "/admin/login";
        	} else if(path.contains("client")) {
        		url = "/client/login";
        	} else if(path.contains("moderator")) {
        		url = "/moderator/login";
        	} else {
        		url = "/home";
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
 
    private boolean isModerator(List<String> roles) {
        if (roles.contains("MODERATOR")) {
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