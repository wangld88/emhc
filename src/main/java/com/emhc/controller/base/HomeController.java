package com.emhc.controller.base;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value="/")
	public String dspDefault() {
		return "/home";
	}
	
	@RequestMapping(value="/home")
	public String dspHome() {
		return "/home";
	}
	
	@RequestMapping(value="/fit")
	public String dspFit() {
		return "/fit";
	}
	
	@RequestMapping(value="/contact")
	public String dspContact() {
		return "/contact";
	}
	
	@RequestMapping(value="/aboutus")
	public String dspAboutus() {
		return "/aboutus";
	}
	
	@RequestMapping(value="/whychoose")
	public String dspWhychoose() {
		return "/whychoose";
	}
	
	@RequestMapping(value="/fitmodel")
	public String dspFitmodel() {
		return "/fitmodel";
	}

	@RequestMapping(value="/corporatemodel")
	public String dspCorporatemodel() {
		return "/corporatemodel";
	}

	@RequestMapping(value="/employeracct")
	public String dspEmployeracct() {
		return "/employeracct";
	}

	@RequestMapping(value="/employeracctnext")
	public String dspEmployeracctnext() {
		return "/employeracctnext";
	}

	@RequestMapping(value="/post")
	public String dspPost() {
		return "/post";
	}

	@RequestMapping(value="/links")
	public String dspLinks() {
		return "/links";
	}

	@RequestMapping(value="/faqs")
	public String dspFaqs() {
		return "/faqs";
	}

	@RequestMapping(value="/layout")
	public String dspLayout() {
		
		return "/layout";
	}
}
