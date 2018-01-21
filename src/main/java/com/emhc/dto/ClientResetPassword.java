package com.emhc.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;


public class ClientResetPassword {

    
    private String token = "";
	private int userid = 0;
    
	@NotNull
    @Size(min=0, max=50)
    private String username = "";

 //   @NotEmpty
 //   @Size(min=6, max=64)
    private String password = "";

    @NotEmpty
//    @Size(min=6, max=64)
    private String passwordRepeated = "";


    public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password.trim();
    }

    public String getPasswordRepeated() {
        return passwordRepeated;
    }

    public void setPasswordRepeated(String passwordRepeated) {
        this.passwordRepeated = passwordRepeated.trim();
    }

    @Override
    public String toString() {
        return "StudentPasswordUpdateForm {" +
                "username=" + username +
                ", password=***" + '\'' +
                ", passwordRepeated=***" + '\'' +
                '}';
    }


	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
