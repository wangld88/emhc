package com.emhc.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Calendar;
import java.util.List;


/**
 * The persistent class for the sessions database table.
 *
 */
@Entity
@Table(name="sessions")
@NamedQuery(name="Session.findAll", query="SELECT s FROM Session s")
public class Session implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "sessionid", updatable = false, nullable = false)
	private int sessionid;

	private String name;

	@Temporal(TemporalType.DATE)
	private Calendar registstart;

	@Temporal(TemporalType.DATE)
	private Calendar registend;

	@Temporal(TemporalType.DATE)
	private Calendar sessiondate;

	private int createdby;

	@Temporal(TemporalType.DATE)
	private Calendar creationdate;

	private String status;

	//bi-directional many-to-one association to Schedule
	@OneToMany(mappedBy="session")
	private List<Schedule> schedules;

	//bi-directional many-to-one association to Location
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="locationid")
	private Location location;

	//bi-directional many-to-one association to Program
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="programid")
	private Program program;

	//bi-directional many-to-one association to Usersession
	/*@OneToMany(mappedBy="session")
	private List<Usersession> usersessions;*/

	public Session() {
	}

	public int getSessionid() {
		return this.sessionid;
	}

	public void setSessionid(int sessionid) {
		this.sessionid = sessionid;
	}

	public int getCreatedby() {
		return this.createdby;
	}

	public void setCreatedby(int createdby) {
		this.createdby = createdby;
	}

	public Calendar getCreationdate() {
		return this.creationdate;
	}

	public void setCreationdate(Calendar creationdate) {
		this.creationdate = creationdate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Calendar getRegistend() {
		return this.registend;
	}

	public void setRegistend(Calendar registend) {
		this.registend = registend;
	}

	public Calendar getRegiststart() {
		return this.registstart;
	}

	public void setRegiststart(Calendar registstart) {
		this.registstart = registstart;
	}

	public Calendar getSessiondate() {
		return this.sessiondate;
	}

	public void setSessiondate(Calendar sessiondate) {
		this.sessiondate = sessiondate;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Schedule> getSchedules() {
		return this.schedules;
	}

	public void setSchedules(List<Schedule> schedules) {
		this.schedules = schedules;
	}

	/*public Schedule addSchedule(Schedule schedule) {
		getSchedules().add(schedule);
		schedule.setSession(this);

		return schedule;
	}

	public Schedule removeSchedule(Schedule schedule) {
		getSchedules().remove(schedule);
		schedule.setSession(null);

		return schedule;
	}*/

	public Location getLocation() {
		return this.location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public Program getProgram() {
		return this.program;
	}

	public void setProgram(Program program) {
		this.program = program;
	}

	/*public List<Usersession> getUsersessions() {
		return this.usersessions;
	}

	public void setUsersessions(List<Usersession> usersessions) {
		this.usersessions = usersessions;
	}

	public Usersession addUsersession(Usersession usersession) {
		getUsersessions().add(usersession);
		usersession.setSession(this);

		return usersession;
	}

	public Usersession removeUsersession(Usersession usersession) {
		getUsersessions().remove(usersession);
		usersession.setSession(null);

		return usersession;
	}*/

}