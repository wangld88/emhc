package com.emhc.dto;

import com.emhc.model.Template;

public class TemplateForm {

	private int templateid;

	private String subject;
	
	private String description;
	
	private String bcc;

	private String cc;

	private String content;

	private String recipient;

	private String sender;

	
	public TemplateForm() {
		
	}
	
	public TemplateForm(Template template) {
		this.templateid = template.getTemplateid();
		this.subject = template.getSubject();
	}
	
	
	public int getTemplateid() {
		return templateid;
	}

	public void setTemplateid(int templateid) {
		this.templateid = templateid;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getBcc() {
		return bcc;
	}

	public void setBcc(String bcc) {
		this.bcc = bcc;
	}

	public String getCc() {
		return cc;
	}

	public void setCc(String cc) {
		this.cc = cc;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}
	
	public Template getTemplate() {
		Template template = new Template();
		
		template.setTemplateid(templateid);
		template.setSubject(subject);
		template.setDescription(description);
		template.setSender(sender);
		template.setRecipient(recipient);
		template.setCc(cc);
		template.setBcc(bcc);
		template.setContent(content);
		
		return template;
	}

}
