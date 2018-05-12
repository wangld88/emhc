package com.emhc.dto;

import java.text.SimpleDateFormat;
import java.util.List;

import com.emhc.model.Answer;
import com.emhc.model.Organization;
import com.emhc.model.Question;
import com.emhc.model.Registration;
import com.emhc.model.Schedule;
import com.emhc.model.User;

public class RegistrationForm {

	private Registration registration;

	private Answer answer;

	private User user;

	private String firstname;

	private String lastname;

	private String sessionDate;

	private String startTime;

	private String location;

	private String email;

	private String assessment;

	private String assessmentHtml;

	private List<Question> questions;

	private String moderator_firstname;

	private String moderator_phone;

	private String moderator_email;
	public RegistrationForm(List<Question> questions) {
		this.questions = questions;
	}

	public Registration getRegistration() {
		return registration;
	}

	public void setRegistration(Registration registration) {
		this.registration = registration;
		Schedule schedule = registration.getSchedule();
		SimpleDateFormat dformatter = new SimpleDateFormat("MMM dd, yyyy");
		SimpleDateFormat tformatter = new SimpleDateFormat("hh:mm");
		this.location = schedule.getSession().getLocation().getName();
		this.sessionDate = dformatter.format(schedule.getSession().getSessiondate().getTime());
		this.startTime = tformatter.format(schedule.getScheduletime());
	}

	public Answer getAnswer() {
		return answer;
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;
		this.generateAssessmentResult(answer);
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
		this.email = user.getEmail();
		this.firstname = user.getFirstname();
		this.lastname = user.getLastname();
		Organization org = user.getProgram().getOrganization();
		this.moderator_email = org.getEmail();
		this.moderator_firstname = org.getContact();
		this.moderator_phone = org.getPhone();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSessionDate() {
		return sessionDate;
	}

	public void setSessionDate(String sessionDate) {
		this.sessionDate = sessionDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAssessment() {
		return assessment;
	}

	public void setAssessment(String assessment) {
		this.assessment = assessment;
	}

	public String getAssessmentHtml() {
		return assessmentHtml;
	}

	public void setAssessmentHtml(String assessmentHtml) {
		this.assessmentHtml = assessmentHtml;
	}

	private String generateAssessmentResult(Answer answer) {
		StringBuffer sb = new StringBuffer();
		StringBuffer textSB = new StringBuffer();
		Class<?> noparams[] = {};

		sb.append("<TABLE border='1'>");
		sb.append("<TR style='border: solid 1px #202020;'>");
		sb.append("<TH>Have you had or do you currently have any of the following:</TH>");
		sb.append("<TH>Yes</TH>");
		sb.append("<TH>No</TH>");
		sb.append("<TH>Explicit explanation on any yes answers re: symptoms, frequency, severity, medical treatment etc</TH>");
		sb.append("</TR>");

		textSB.append("Have you had or do you currently have any of the following:  |  Yes  |  No  |  You must explain any yes answers &  be as explicit as possible re: symptoms, frequency, severity, medical treatment etc \n");
		int len = "Have you had or do you currently have any of the following:  ".length();

		try {

			for(int i = 0; i < questions.size(); i++) {
				String methodname = "getAnswer" + (i + 1);
				String ans = (String) Answer.class.getDeclaredMethod(methodname, noparams).invoke(answer, null);
				String qname = questions.get(i).getName();
				textSB.append(qname);
				for(int j=0; j<len-qname.length()+2; j++) {
					textSB.append(" ");
				}

				sb.append("<TR>");
				sb.append("<TD>" + questions.get(i).getName() + "</TD>");
				if(ans == null) {
					textSB.append("|       |   X   |  \n");
					sb.append("<TD></TD>");
					sb.append("<TD>X</TD>");
					sb.append("<TD></TD>");
				} else {
					textSB.append("|   X   |       |");
					textSB.append(ans + " \n");
					sb.append("<TD>X</TD>");
					sb.append("<TD></TD>");
					sb.append("<TD>" + ans + "</TD>");
				}
				sb.append("</TR>");
				;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		sb.append("</TABLE>");

		assessmentHtml = sb.toString();
		assessment = textSB.toString();

		return sb.toString();
	}

	public String getModerator_firstname() {
		return moderator_firstname;
	}

	public void setModerator_firstname(String moderator_firstname) {
		this.moderator_firstname = moderator_firstname;
	}

	public String getModerator_phone() {
		return moderator_phone;
	}

	public void setModerator_phone(String moderator_phone) {
		this.moderator_phone = moderator_phone;
	}

	public String getModerator_email() {
		return moderator_email;
	}

	public void setModerator_email(String moderator_email) {
		this.moderator_email = moderator_email;
	}

}
