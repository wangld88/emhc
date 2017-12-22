package com.emhc.dto;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.emhc.model.Schedule;


public class ScheduleForm {

	private int scheduleid;

	private int capacity;

	private int duration;

	private LocalTime scheduletime;
	
	private int hour;
	
	private int minute;
	
	private String am;

	private int sessionid;

	private long organizationid;

	
	public ScheduleForm() {
		
	}

	public ScheduleForm(Schedule schedule) {
		this.scheduleid = schedule.getScheduleid();
		this.scheduletime = schedule.getScheduletime().toLocalDateTime().toLocalTime();
		hour = scheduletime.getHour();
		if(hour > 12) {
			hour = hour - 12;
			am = "PM";
		} else {
			am = "AM";
		}
		minute = scheduletime.getMinute();
		this.duration = schedule.getDuration();
		this.capacity = schedule.getCapacity();
		this.sessionid = schedule.getSession().getSessionid();
		this.organizationid = schedule.getSession().getProgram().getOrganization().getOrganizationid();
	}

	public int getScheduleid() {
		return scheduleid;
	}

	public void setScheduleid(int scheduleid) {
		this.scheduleid = scheduleid;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public LocalTime getScheduletime() {
		return scheduletime;
	}

	public void setScheduletime(LocalTime scheduletime) {
		this.scheduletime = scheduletime;
	}

	public int getSessionid() {
		return sessionid;
	}

	public void setSessionid(int sessionid) {
		this.sessionid = sessionid;
	}
	
	public Schedule getSchedule() {
		Schedule schedule = new Schedule();
		schedule.setCapacity(capacity);
		schedule.setScheduleid(scheduleid);
		if("PM".equals(am)) {
			hour += 12;
		}
		scheduletime = LocalTime.of(hour, minute);
		schedule.setScheduletime(Timestamp.valueOf(LocalDateTime.of(LocalDate.now(), scheduletime)));
		schedule.setDuration(duration);
		
		return schedule;
	}

	public long getOrganizationid() {
		return organizationid;
	}

	public void setOrganizationid(long organizationid) {
		this.organizationid = organizationid;
	}

	public int getHour() {
		return hour;
	}

	public void setHour(int hour) {
		this.hour = hour;
	}

	public int getMinute() {
		return minute;
	}

	public void setMinute(int minute) {
		this.minute = minute;
	}

	public String getAm() {
		return am;
	}

	public void setAm(String am) {
		this.am = am;
	}
}
