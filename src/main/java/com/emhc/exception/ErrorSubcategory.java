package com.emhc.exception;

import java.util.HashMap;
import java.util.Map;

public enum ErrorSubcategory {
	SYSTEM ("System"), APPLICATION ("Application"), CONFIG ("Config"), SECURITY ("Security"), TIMEOUT ("Timeout"), AUTHN ("Authentication"), AUTHZ ("Authorization"), 
	MISC ("Miscellaneous");	
	
	private String name;

	ErrorSubcategory(String name) {
        this.name = name;
    }

	public String getName() {
	    return name;
	}

	@SuppressWarnings("serial")
	public static final Map<String, ErrorSubcategory> NAMETOERRORSUBCATEGORY = 
			new HashMap<String, ErrorSubcategory>(){{
				put("System", ErrorSubcategory.SYSTEM);
				put("Application", ErrorSubcategory.APPLICATION);
				put("Config", ErrorSubcategory.CONFIG);
				put("Security", ErrorSubcategory.SECURITY);
				put("Timeout", ErrorSubcategory.TIMEOUT);
				put("Authentication", ErrorSubcategory.AUTHN);
				put("Authorization", ErrorSubcategory.AUTHZ);
				//put("Policy", ErrorSubcategory.POLICY);
				//put("BlackList", ErrorSubcategory.BLACKLIST);
				//put("WhiteList", ErrorSubcategory.WHITELIST);
				//put("PolicyEnforcement", ErrorSubcategory.POLICYENFORCEMENT);
				put("Miscellaneous", ErrorSubcategory.MISC);
				
			}};
	
}
