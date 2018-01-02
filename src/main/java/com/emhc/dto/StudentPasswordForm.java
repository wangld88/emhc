package com.emhc.dto;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;


public class StudentPasswordForm {

    @NotEmpty
    @Size(min=0, max=80)
    private String email = "";

    @NotEmpty
    @Size(min=0, max=50)
    private String studentNumber = "";

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email.trim();
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber.trim();
    }

    @Override
    public String toString() {
        return "UserCreateForm{" +
                "email='" + email.replaceFirst("@.+", "@***") + '\'' +
                ", studentNumber=" + studentNumber +
                '}';
    }

}
