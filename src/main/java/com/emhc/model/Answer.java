package com.emhc.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the answers database table.
 * 
 */
@Entity
@Table(name="answers")
@NamedQuery(name="Answer.findAll", query="SELECT a FROM Answer a")
public class Answer implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int answerid;

	private String answer1;

	private String answer10;

	private String answer11;

	private String answer12;

	private String answer13;

	private String answer14;

	private String answer2;

	private String answer3;

	private String answer4;

	private String answer5;

	private String answer6;

	private String answer7;

	private String answer8;

	private String answer9;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="userid")
	private User user;

	private String button01;
	private String button02;
	private String button03;
	private String button04;
	private String button05;
	private String button06;
	private String button07;
	private String button08;
	private String button09;
	private String button10;
	private String button11;
	private String button12;
	private String button13;
	private String button14;
	
	public Answer() {
	}

	public int getAnswerid() {
		return this.answerid;
	}

	public void setAnswerid(int answerid) {
		this.answerid = answerid;
	}

	public String getAnswer1() {
		return this.answer1;
	}

	public void setAnswer1(String answer1) {
		this.answer1 = answer1;
	}

	public String getAnswer10() {
		return this.answer10;
	}

	public void setAnswer10(String answer10) {
		this.answer10 = answer10;
	}

	public String getAnswer11() {
		return this.answer11;
	}

	public void setAnswer11(String answer11) {
		this.answer11 = answer11;
	}

	public String getAnswer12() {
		return this.answer12;
	}

	public void setAnswer12(String answer12) {
		this.answer12 = answer12;
	}

	public String getAnswer13() {
		return this.answer13;
	}

	public void setAnswer13(String answer13) {
		this.answer13 = answer13;
	}

	public String getAnswer14() {
		return this.answer14;
	}

	public void setAnswer14(String answer14) {
		this.answer14 = answer14;
	}

	public String getAnswer2() {
		return this.answer2;
	}

	public void setAnswer2(String answer2) {
		this.answer2 = answer2;
	}

	public String getAnswer3() {
		return this.answer3;
	}

	public void setAnswer3(String answer3) {
		this.answer3 = answer3;
	}

	public String getAnswer4() {
		return this.answer4;
	}

	public void setAnswer4(String answer4) {
		this.answer4 = answer4;
	}

	public String getAnswer5() {
		return this.answer5;
	}

	public void setAnswer5(String answer5) {
		this.answer5 = answer5;
	}

	public String getAnswer6() {
		return this.answer6;
	}

	public void setAnswer6(String answer6) {
		this.answer6 = answer6;
	}

	public String getAnswer7() {
		return this.answer7;
	}

	public void setAnswer7(String answer7) {
		this.answer7 = answer7;
	}

	public String getAnswer8() {
		return this.answer8;
	}

	public void setAnswer8(String answer8) {
		this.answer8 = answer8;
	}

	public String getAnswer9() {
		return this.answer9;
	}

	public void setAnswer9(String answer9) {
		this.answer9 = answer9;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getButton01() {
		
		return this.button01;
	}

	public void setButton01(String button01) {
		this.button01 = button01;
	}
	
	public String getButton02() {
		
		return this.button02;
	}

	public void setButton02(String button02) {
		this.button02 = button02;
	}
	public String getButton03() {
		
		return this.button03;
	}

	public void setButton03(String button03) {
		this.button03 = button03;
	}
	public String getButton04() {
		
		return this.button04;
	}

	public void setButton04(String button04) {
		this.button04 = button04;
	}
	public String getButton05() {
		
		return this.button05;
	}

	public void setButton05(String button05) {
		this.button05 = button05;
	}
	public String getButton06() {
		
		return this.button06;
	}

	public void setButton06(String button06) {
		this.button06 = button06;
	}
	public String getButton07() {
		
		return this.button07;
	}

	public void setButton07(String button07) {
		this.button07 = button07;
	}
	public String getButton08() {
		
		return this.button08;
	}

	public void setButton08(String button08) {
		this.button08 = button08;
	}
	public String getButton09() {
		
		return this.button09;
	}

	public void setButton09(String button09) {
		this.button09 = button09;
	}
	public String getButton10() {
		
		return this.button10;
	}

	public void setButton10(String button10) {
		this.button10 = button10;
	}
	public String getButton11() {
		
		return this.button11;
	}

	public void setButton11(String button11) {
		this.button11 = button11;
	}
	public String getButton12() {
		
		return this.button12;
	}

	public void setButton12(String button12) {
		this.button12 = button12;
	}
	public String getButton13() {
		
		return this.button13;
	}

	public void setButton13(String button13) {
		this.button13 = button13;
	}
	public String getButton14() {
		
		return this.button14;
	}

	public void setButton14(String button14) {
		this.button14 = button14;
	}
}