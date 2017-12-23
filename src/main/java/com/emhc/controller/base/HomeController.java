package com.emhc.controller.base;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value="/")
	public String dspDefault() {
		System.out.println("root home is called");
		return "/home";
	}
	
	@RequestMapping(value="/home")
	public String dspHome() {
		System.out.println("root home is called");
		return "/home";
	}
	
	@RequestMapping(value="/fit")
	public String dspFit() {
		System.out.println("root home is called");
		return "/fit";
	}
	
	@RequestMapping(value="/contact")
	public String dspContact() {
		System.out.println("root home is called");
		return "/contact";
	}
	
	@RequestMapping(value="/aboutus")
	public String dspAboutus() {
		System.out.println("root home is called");
		return "/aboutus";
	}
	
	@RequestMapping(value="/whychoose")
	public String dspWhychoose() {
		System.out.println("whychoose home is called");
		return "/whychoose";
	}
	
	@RequestMapping(value="/layout")
	public String dspLayout() {
		
		return "/layout";
	}
}
