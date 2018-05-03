package com.emhc.dto;

import java.util.Calendar;

import org.springframework.format.annotation.DateTimeFormat;

import com.emhc.model.Session;


public class SessionForm {

    private int sessionid;

	private String name;

	@DateTimeFormat(pattern="MM/dd/yyyy")
	private Calendar sessiondate;

	@DateTimeFormat(pattern="MM/dd/yyyy")
	private Calendar registend;

	@DateTimeFormat(pattern="MM/dd/yyyy")
	private Calendar registstart;

	private String status;

	private int createdby;

	private int programid;

	private int locationid;

	private Calendar creationdate;

	private long organizationid;


	public SessionForm() {

	}

	public SessionForm(Session session) {
		this.name = session.getName();
		this.sessionid = session.getSessionid();
		this.sessiondate = session.getSessiondate();
		this.registend = session.getRegistend();
		this.registstart = session.getRegiststart();
		this.createdby = session.getCreatedby();
		this.creationdate = session.getCreationdate();
		this.programid = session.getProgram().getProgramid();
		this.locationid = session.getLocation().getLocationid();
		this.status = session.getStatus();
		this.organizationid = session.getProgram().getOrganization().getOrganizationid();
	}

	public int getSessionid() {
		return sessionid;
	}

	public void setSessionid(int sessionid) {
		this.sessionid = sessionid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Calendar getSessiondate() {
		return sessiondate;
	}

	public void setSessiondate(Calendar sessiondate) {
		this.sessiondate = sessiondate;
	}

	public Calendar getRegistend() {
		return registend;
	}

	public void setRegistend(Calendar registend) {
		this.registend = registend;
	}

	public Calendar getRegiststart() {
		return registstart;
	}

	public void setRegiststart(Calendar registstart) {
		this.registstart = registstart;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getCreatedby() {
		return createdby;
	}

	public void setCreatedby(int createdby) {
		this.createdby = createdby;
	}

	public int getProgramid() {
		return programid;
	}

	public void setProgramid(int programid) {
		this.programid = programid;
	}

	public int getLocationid() {
		return locationid;
	}

	public void setLocationid(int locationid) {
		this.locationid = locationid;
	}

	public Calendar getCreationdate() {
		return creationdate;
	}

	public void setCreationdate(Calendar creationdate) {
		this.creationdate = creationdate;
	}

	public Session getSession() {
		Session session = new Session();
		session.setSessionid(sessionid);
		session.setName(name);
		session.setSessiondate(sessiondate);
		session.setRegistend(registend);
		session.setRegiststart(registstart);
		session.setCreatedby(createdby);
		session.setCreationdate(creationdate);
		session.setStatus(status);

		return session;
	}

	public long getOrganizationid() {
		return organizationid;
	}

	public void setOrganizationid(long organizationid) {
		this.organizationid = organizationid;
	}
}
