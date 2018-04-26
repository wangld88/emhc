package com.emhc.controller.admin;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.emhc.controller.base.BaseController;
import com.emhc.dto.SecretForm;
import com.emhc.dto.UserForm;
import com.emhc.model.Secret;
import com.emhc.model.User;
import com.emhc.security.LoginUser;

@Controller
@RequestMapping({"/admin"})
public class AdminSecret extends BaseController {

	private static final Logger logger = LoggerFactory.getLogger(AdminSecret.class);


	@RequestMapping(value={"/secret"}, method = RequestMethod.GET)
	public String dspSecret(Model model) {

		logger.info("dspSecret is called");

		String rtn = "/admin/secret";
		User user = getPrincipal();

		model.addAttribute("loginUser", user);

		if(user == null) {
			rtn = "/admin/login";
		} else {

			List<Secret> secs = secretService.getAll();

			Secret secret = new Secret();

			if(secs != null && !secs.isEmpty()) {
				secret = secs.get(0);
			}

			SecretForm secretForm = new SecretForm(secret);

			model.addAttribute("secretForm", secretForm);
		}

		return rtn;
	}


	@RequestMapping(value={"/secret"}, method = RequestMethod.POST)
	public String doSecret(@Valid SecretForm secretForm, Errors errors, ModelMap model,BindingResult bindingResult) {

		logger.info("doSecret is called");

		String rtn = "/admin/secret";
		User user = getPrincipal();
		model.addAttribute("loginUser", user);

		if(user == null) {
			rtn = "/admin/login";
		}

		if (!bindingResult.hasErrors()) {

			Secret secret = secretService.save(secretForm.getSecret());

			secretForm.setSecretid(secret.getSecretid());
			model.addAttribute("secret", secret);
		}

		model.addAttribute("secretForm", secretForm);

		return rtn;
	}

	private User getPrincipal(){
    	User user = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof LoginUser) {
            user = ((LoginUser)principal).getUser();
        } else {
            user = userService.getByUsername("");
        }
        return user;
    }

}
