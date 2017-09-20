package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Question;


public interface QuestionRepository extends JpaRepository<Question, Long> {

	List<Question> findByName();
	
}
