package com.emhc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Program;

public interface ProgramRepository extends JpaRepository<Program, Integer> {
	 Program findByName(String name);
	 Program findByProgramid(int id);
}
