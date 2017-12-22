package com.emhc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emhc.model.Location;
import com.emhc.model.Organization;


public interface LocationRepository extends JpaRepository<Location, Integer> {

	public Location findByLocationid(int locationid);
	public List<Location> findByName(String name);
	public List<Location> findAll();
	public List<Location> findByOrganization_organizationid(long organizationid);
	public List<Location> findByNameAndOrganization(String name, Organization organization);
	public List<Location> findByOrganization(Organization organization);
}
