package com.emhc.dto;

import com.emhc.model.Secret;

public class SecretForm {

	private int secretid;
	private String oldcode;
	private String code;
	private String confirmcode;

	public SecretForm() {

	}

	public SecretForm(Secret secret) {
		this.secretid = secret.getSecretid();
		this.code = secret.getCode();
	}

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

	public Secret getSecret() {

		Secret secret = new Secret();
		secret.setSecretid(secretid);
		secret.setCode(code);

		return secret;
	}
}
