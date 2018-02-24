package com.emhc.controller.base;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.error.Message;

	
@Controller
public class CommonErrorController implements ErrorController {

    private static final String PATH = "/error";
    private static final Logger logger = LoggerFactory.getLogger(CommonErrorController.class);

    @Value("${debug}")
    private boolean debug;
    		
    @Autowired
    private ErrorAttributes errorAttributes;

    
    @RequestMapping(value = PATH)
    public ModelAndView error(HttpServletRequest request, HttpServletResponse response) {
        // Appropriate HTTP response code (e.g. 404 or 500) is automatically set by Spring. 
        // Here we just define response body.
    	Map<String, Object> att = getErrorAttributes(request, debug);
    	logger.info("There is an error in CommonErrorController: "+response.getStatus());

    	return setErrorView(request, response, att, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    
    @Override
    public String getErrorPath() {
        return PATH;
    }

    
    private Map<String, Object> getErrorAttributes(HttpServletRequest request, boolean includeStackTrace) {
        RequestAttributes requestAttributes = new ServletRequestAttributes(request);
        return errorAttributes.getErrorAttributes(requestAttributes, includeStackTrace);
    }

    
    private ModelAndView setErrorView(HttpServletRequest request, HttpServletResponse response, Map<String, Object> att, HttpStatus httpStatus) {
        
        ModelAndView mav = new ModelAndView();
        
        Message message = new Message();
        message.setStatus(Message.ERROR);
        
        StringBuffer url = request.getRequestURL();
        
        String view = "";
     
        if(att != null) {
        	String path = (String) att.get("path");
        	
            if(response.getStatus() == HttpStatus.FORBIDDEN.value()) {
            	if(path.indexOf("/admin") > 0) {
            		view = "/admin/login/login";
    	        } 
            	if (path.indexOf("/moderator") > 0) {
            		view = "/moderator/login/login";
            		}
            	else {
    	        	view = "/client/login/login";
    	        }
            } else {
	        	if(path.indexOf("/admin") > 0) {
	        		view = "/admin" + PATH;
		        } 
	        	if (path.indexOf("/moderator") > 0) {
            		view = "/moderator"+PATH;
            		}
            	else {
		        	view = "/client" + PATH;
		        }
            }
        } else {
	        if(url.indexOf("/admin") > 0) {
	        	view = "/admin" + PATH;
	        } 
	        if (url.indexOf("/moderator") > 0) {
        		view = "/moderator"+PATH;
        		}        	     
	        else {
	        	view = "/client" + PATH;
	        }
        }
        
    	mav.setViewName(view);

    	if (att != null) {
        	String msg = (String) att.get("message");
        	if(msg.contains("Invalid CSRF Token") || msg.contains("CSRF token not found")) {
        		message.setMessage("Your session is expired, please try again");
                mav.addObject("stackTrace", "Your session is expired, please <a href='" + (String) att.get("path") + "'>Login</a> again");
        	} else {
                message.setMessage((String)att.get("error"));
                mav.addObject("stackTrace", att.get("trace"));
        	}
            
            mav.addObject("error", att.get("error"));
            for(String o: att.keySet()) {
            	logger.info(o+": " +att.get(o));
            }
            logger.info("ERROR found in Controller");
        } else {
            logger.info("ERROR found : att is null");
        	//set the att
        	att = new HashMap<>();
        	att.put("path", url);
        	att.put("error", "Unexpected Error Occurred!");
        	att.put("trace", "N/A");
        	att.put("exception", "N/A");
        	message.setMessage("Unexpected Error Occurred!");
        }
        
        mav.addObject("exception", att);
        mav.addObject("url", url);
        mav.addObject("message", message);
        
    	response.setStatus(httpStatus.value());

        return mav;
    }

}
