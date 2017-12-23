package com.emhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emhc.model.Schedule;
import com.emhc.model.Session;
import com.emhc.repository.ScheduleRepository;


@Service
public class ScheduleService {

	@Autowired
	public ScheduleRepository scheduleRepository;
	
	public Schedule getById(int scheduleid) {
		return scheduleRepository.findByScheduleid(scheduleid);
	}
	
	public List<Schedule> getBySession(Session session) {
		return scheduleRepository.findBySession(session);
	}

	public List<Schedule> getAll() {
		return scheduleRepository.findAll();
	}
	
	public Schedule save(Schedule schedule) {
		return scheduleRepository.save(schedule);
	}
}
