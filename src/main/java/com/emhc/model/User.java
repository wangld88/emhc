package com.emhc.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;


/**
 * The persistent class for the users database table.
 *
 */
@Entity
@Table(name="users")
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class User implements Serializable {

	private static final long serialVersionUID = 9116728082295724017L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "userid", updatable = false, nullable = false)
	private int userid;

	@Column(name = "createdby")
	private int createdby;

	@Temporal(TemporalType.DATE)
	private Date creationdate;

	@Column(name = "firstname")
	@NotEmpty(message = "*Please provide your first name")
	private String firstname;

	@Column(name = "lastname")
	@NotEmpty(message = "*Please provide your last name")
	private String lastname;

	@Column(name = "email")
	@NotEmpty(message = "*Please provide an email")
	private String email;

	@Column(name = "orgemail")
	@NotEmpty(message = "*Please provide an email")
	private String orgemail;

	@Column(name = "phone")
	@NotEmpty(message = "*Please provide phone number")
	private String phone;

	@Column(name = "password")
	@Length(min = 3, message = "*Your password must have at least 3 characters")
	@NotEmpty(message = "*Please provide your password")
	//@Transient
	private String password;

	@Column(name = "programyear")
	private int programyear;

	@Column(name = "status")
	private String status;

	@Column(name = "username")
	@NotEmpty(message = "*Please provide your user name")
	private String username;

	@Column(name = "viewer")
	private Byte viewer;

	//bi-directional many-to-one association to Answer
	@OneToMany(mappedBy="user")
	private List<Answer> answers;

	//bi-directional many-to-one association to Registration
	@OneToMany(mappedBy="user")
	private List<Registration> registrations;

	//bi-directional many-to-one association to Program
	@ManyToOne
	@JoinColumn(name="programid")
	private Program program;

	//bi-directional many-to-one association to Role
	@ManyToOne
	@JoinColumn(name="roleid")
	private Role role;


	public User() {
	}

	public int getUserid() {
		return this.userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public int getCreatedby() {
		return this.createdby;
	}

	public void setCreatedby(int createdby) {
		this.createdby = createdby;
	}

	public Date getCreationdate() {
		return this.creationdate;
	}

	public void setCreationdate(Date creationdate) {
		this.creationdate = creationdate;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public String getOrgemail() {
		return orgemail;
	}

	public void setOrgemail(String orgemail) {
		this.orgemail = orgemail;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFirstname() {
		return this.firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getProgramyear() {
		return this.programyear;
	}

	public void setProgramyear(int programyear) {
		this.programyear = programyear;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Byte getViewer() {
		return this.viewer;
	}

	public void setViewer(Byte viewer) {
		this.viewer = viewer;
	}

	public List<Answer> getAnswers() {
		return this.answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}

	public Answer addAnswer(Answer answer) {
		getAnswers().add(answer);
		answer.setUser(this);

		return answer;
	}

	public Answer removeAnswer(Answer answer) {
		getAnswers().remove(answer);
		answer.setUser(null);

		return answer;
	}

	public List<Registration> getRegistrations() {
		return this.registrations;
	}

	public void setRegistrations(List<Registration> registrations) {
		this.registrations = registrations;
	}

	public Registration addRegistration(Registration registration) {
		getRegistrations().add(registration);
		registration.setUser(this);

		return registration;
	}

	public Registration removeRegistration(Registration registration) {
		getRegistrations().remove(registration);
		registration.setUser(null);

		return registration;
	}

	public Program getProgram() {
		return this.program;
	}

	public void setProgram(Program program) {
		this.program = program;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String[] getRoles() {
		String[] rolelist = new String[1];
		rolelist[0] = this.role.getName();
		return rolelist;
	}

}