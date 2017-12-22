package com.emhc.dto;

public class SecretForm {
	
	private int secretid;
	private String oldcode;
	private String code;
	private String confirmcode;

	public int getSecretid() {
		return secretid;
	}
	public void setSecretid(int secretid) {
		this.secretid = secretid;
	}
	public String getOldcode() {
		return oldcode;
	}
	public void setOldcode(String oldcode) {
		this.oldcode = oldcode;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getConfirmcode() {
		return confirmcode;
	}
	public void setConfirmcode(String confirmcode) {
		this.confirmcode = confirmcode;
	}
}
