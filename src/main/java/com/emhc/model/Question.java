package com.emhc.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the questions database table.
 * 
 */
@Entity
@Table(name="questions")
@NamedQuery(name="Question.findAll", query="SELECT q FROM Question q")
public class Question implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="questionid")
	private int questionid;

	@Column(name = "isprimary")
	private String isprimary;

	@Column(name = "name")
	private String name;

	@Column(name = "secondary")
	private String secondary;

	public Question() {
	}

	public int getQuestionid() {
		return this.questionid;
	}

	public void setQuestionid(int questionid) {
		this.questionid = questionid;
	}

	public String getIsprimary() {
		return this.isprimary;
	}

	public void setIsprimary(String isprimary) {
		this.isprimary = isprimary;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSecondary() {
		return this.secondary;
	}

	public void setSecondary(String secondary) {
		this.secondary = secondary;
	}

}