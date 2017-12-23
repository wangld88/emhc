package com.emhc.controller.base;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value="/, /home")
	public String dspHome() {
		
		return "/home";
	}
	
	@RequestMapping(value="/layout")
	public String dspLayout() {
		
		return "/layout";
	}
}
