package com.emhc.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.emhc.controller.base.BaseController;


@Controller
@RequestMapping({"/admin"})
public class AdminReport extends BaseController {

	@RequestMapping("/report")
	public String dspReport() {
		String rtn = "/admin/report";
		
		return rtn;
	}
}
