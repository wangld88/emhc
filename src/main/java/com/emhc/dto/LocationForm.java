package com.emhc.dto;

import com.emhc.model.Organization;
import com.emhc.model.Location;

public class LocationForm {

	private int locationid;

	private String name;
	
	private Organization organization;

	public LocationForm() {
		
	}
	
	public LocationForm(Location location) {
		this.locationid = location.getLocationid();
		this.name = location.getName();
		this.organization = location.getOrganization();
	}

	public int getLocationid() {
		return locationid;
	}

	public void setLocationid(int locationid) {
		this.locationid = locationid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Organization getOrganization() {
		return organization;
	}

	public void setOrganization(Organization organization) {
		this.organization = organization;
	}
	
	public Location getLocation() {
		Location location = new Location();
		
		location.setLocationid(locationid);
		location.setName(name);
		location.setOrganization(organization);
		
		return location;
	}
}
