package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Schedule;
import com.emhc.model.Session;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

	public Schedule findByScheduleid(int scheduleid);

	public List<Schedule> findBySessionOrderBySession_sessiondateAscScheduletimeAsc(Session session);

}
