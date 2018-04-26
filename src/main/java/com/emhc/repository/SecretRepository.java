package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Secret;


public interface SecretRepository extends JpaRepository<Secret, Integer> {

	public Secret findBySecretid(int sessionid);

	public Secret findByCode(String code);

	public List<Secret> findAll();

}
