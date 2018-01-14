package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.Question;
import com.emhc.repository.QuestionRepository;


@Service
public class QuestionService {

	@Autowired
	private QuestionRepository questionRepository;	
	
	public List<Question> getAll() {
		return questionRepository.findAll();
	}
	
	public Question save(Question question) {
		return questionRepository.save(question);
	}
}
