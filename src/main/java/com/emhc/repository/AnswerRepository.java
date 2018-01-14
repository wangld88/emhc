package com.emhc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Answer;
import com.emhc.model.User;

public interface AnswerRepository extends JpaRepository<Answer, Integer>{
	
	Answer findByAnswerid(int answerid);
	Answer findByUser(User user);
	Answer findByUser_userid(int userid);
	
	//Answer saveAnswerByUserid(int userid);
}
