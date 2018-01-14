package com.emhc.controller.base;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.exceptions.TemplateInputException;

import com.emhc.error.Message;
import com.emhc.error.MessageHandler;
import com.emhc.service.LocationService;
import com.emhc.service.OrganizationService;
import com.emhc.service.ProgramService;
import com.emhc.service.RoleService;
import com.emhc.service.ScheduleService;
import com.emhc.service.SessionService;
import com.emhc.service.TemplateService;
import com.emhc.service.UserService;


public class BaseController {

	private static final Logger logger = LoggerFactory.getLogger(BaseController.class);
	
	protected static final String DATE_FORMAT = "yyyy-MM-dd";
	
	protected static final String ERROR_VIEW = "/error";
	
    @Autowired
    private ErrorAttributes errorAttributes;

    @Autowired
	protected MessageHandler messageHandler;

	@Autowired
	public UserService userService;
	
	@Autowired
	public RoleService roleService;
	
    @Autowired
    public ProgramService programService;
    
    @Autowired
	public OrganizationService organizationService;
	
    @Autowired
	public LocationService locationService;
	
	@Autowired
	public SessionService sessionService;
	
	@Autowired
	public ScheduleService scheduleService;
	
	@Autowired
	public TemplateService templateService;
	
    
	@ExceptionHandler( TemplateInputException.class )
	public ModelAndView templateInputExceptionHandler (TemplateInputException e, HttpServletResponse httpresponse) {
		ModelAndView mv = new ModelAndView("/admin/organization");
		
		Message message = new Message();
		message.setStatus(Message.ERROR);
		message.setMessage("Load template " + e.getTemplateName() + " failed with error: " + e.getMessage());
		mv.addObject("message", message);
		
		return mv;
	}
	
	@ExceptionHandler({ Exception.class })
	public ModelAndView uncaughtExceptionHandling (Exception e, HttpServletRequest request, HttpServletResponse httpresponse) {

		logger.info("General Error is caught: " + e.getMessage());
		//e.printStackTrace();
		//String errorMsg = "";
		String errorDetails = "N/A";
		
        StringBuffer url = request.getRequestURL();

        String view = "";
        
        if(url.indexOf("/admin") > 0) {
        	view = "/admin" + ERROR_VIEW;
        } else {
        	view = "/student" + ERROR_VIEW;
        }
        logger.info("view: " + view + ", URL: "+url);
        
		final ModelAndView model = initModelView(view);
		RequestAttributes requestAttributes = new ServletRequestAttributes(request);
		Map<String, Object> att = errorAttributes.getErrorAttributes(requestAttributes, true);
		
		if (e != null) {
			errorDetails = e.getMessage();
			
			if (e.getCause() != null && e.getCause().getMessage() != null) {
				errorDetails += " - " + e.getCause().getMessage();
			}
			
		}
		
		model.addObject("errordetails", errorDetails);
		model.addObject("exception", att);
		model.addObject("url", url);

		return model;
		
	}

	private ModelAndView initModelView(String view) {
		ModelAndView model = new ModelAndView(ERROR_VIEW);
		if(view != null && !view.isEmpty() && !ERROR_VIEW.equals(view)) {
			model = new ModelAndView(view);
		}
		/*
		Boolean isAdmin = userService.isAdmin();
		
		model.addObject(USER_INFO, user);
		model.addObject(IS_ADMIN, isAdmin);

		if(isAdmin) {
			List<Type> types = typeService.findAll();

			model.addObject(ADMIN_STAGE, STAGE_HOME);
			model.addObject(TYPES, types);
		}*/
		
		return model;
	}
}
