package com.emhc.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.emhc.model.Location;
import com.emhc.model.Organization;
import com.emhc.repository.LocationRepository;


@Service
public class LocationService {

	@Autowired
	private LocationRepository locationRepository;
	
	
	@Transactional(readOnly=true)
	public Location getById(int locationid) {
		return locationRepository.findByLocationid(locationid);
	}
	
	@Transactional(readOnly=true)
	public List<Location> getAll() {
		return locationRepository.findAll();
	}
	
	@Transactional(readOnly=true)
	public List<Location> getByOrganizationid(long organizationid) {
		return locationRepository.findByOrganization_organizationid(organizationid);
	}
	
	@Transactional(readOnly=true)
	public List<Location> getByNameOrganization(String name, Organization organization) {
		return locationRepository.findByNameAndOrganization(name, organization);
	}
	
	@Transactional(readOnly=true)
	public List<Location> getByOrganization(Organization organization) {
		return locationRepository.findByOrganization(organization);
	}
	
	@Transactional(readOnly=false, propagation=Propagation.SUPPORTS)
	public Location save(Location location) {
		return locationRepository.saveAndFlush(location);
	}
}
