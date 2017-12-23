package com.emhc.dto;

import com.emhc.model.Organization;


/**
 * This is a DTO of the UI form - OrganizationForm
 * 
 * @author KJC
 *
 */
public class OrganizationForm {
	
	private long organizationid;

	private String name;

	private String contact;

	private String domain;

	private String email;

	private String phone;

	
	public OrganizationForm() {
		
	}
	
	public OrganizationForm(Organization org) {
		this.organizationid = org.getOrganizationid();
		this.name = org.getName();
		this.domain = org.getDomain();
		this.contact = org.getContact();
		this.email = org.getEmail();
		this.phone = org.getPhone();
	}

	public long getOrganizationid() {
		return organizationid;
	}

	public void setOrganizationid(long organizationid) {
		this.organizationid = organizationid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Organization getOrganization() {
		Organization org = new Organization();
		
		org.setOrganizationid(organizationid);
		org.setName(name);
		org.setDomain(domain);
		if(contact != null && !contact.isEmpty()) {
			org.setContact(contact);
		}
		if(email != null && !email.isEmpty()) {
			org.setEmail(email);
		}
		if(phone != null && !phone.isEmpty()) {
			org.setPhone(phone);
		}
		
		return org;
	}
	
	public String toSting() {
		String rtn = "OrganizationForm: {";
		rtn += "name: " + name + ",";
		rtn += "domain: " + domain + ",";
		rtn += "contact: " + contact + ",";
		rtn += "email: " + email + ",";
		rtn += "phone: " + phone;
		rtn += "}";
		return rtn;
	}
}
