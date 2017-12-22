package com.emhc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

	public Schedule findByScheduleid(int scheduleid);
	
}
