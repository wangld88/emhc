package com.emhc.dto;

import com.emhc.model.Answer;
import com.emhc.model.Registration;
import com.emhc.model.User;

public class ReportForm {

	private Answer answer;
	
	private Registration registration;
	
	private User user;

	
	public Answer getAnswer() {
		return answer;
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;
	}

	public Registration getRegistration() {
		return registration;
	}

	public void setRegistration(Registration registration) {
		this.registration = registration;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
