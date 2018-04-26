package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.Secret;
import com.emhc.repository.SecretRepository;


@Service
public class SecretService {

	@Autowired
	private SecretRepository secretRepository;


	public Secret getById(int secretid) {
		return secretRepository.findBySecretid(secretid);
	}

	public Secret getByCode(String code) {
		return secretRepository.findByCode(code);
	}

	public List<Secret> getAll() {
		return secretRepository.findAll();
	}

	public Secret save(Secret secret) {
		return secretRepository.save(secret);
	}
}
