package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Template;

public interface TemplateRepository extends JpaRepository<Template, Integer> {

	public Template findByTemplateid(int templateid);
	
	public List<Template> findAll();
	
}
