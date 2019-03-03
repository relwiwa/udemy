package com.relwiwa.jsf.helloworld;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import javax.faces.bean.ManagedBean;

@ManagedBean
public class Student {
	private String firstName;
	private String lastName;
	private String country;
	private String favoriteLanguage;
	private String[] favoriteColors;
	
	List<String> countryOptions;
	
	// ManagedBean needs non-argument constructor
	public Student() {
		countryOptions = new ArrayList<>();
		countryOptions.add("Brazil");
		countryOptions.add("France");
		countryOptions.add("Germany");
		countryOptions.add("India");
		countryOptions.add("Turkey");

		// pre-population
		firstName = "Mary";
		lastName = "Public";
		country = "India";
		favoriteLanguage = "Javascript";
		favoriteColors = new String[] {"orange", "blue"};
		
	}

	// ManagedBeand needs getters and setters
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public List<String> getCountryOptions() {
		return countryOptions;
	}

	public String getFavoriteLanguage() {
		return favoriteLanguage;
	}

	public void setFavoriteLanguage(String favoriteLanguage) {
		this.favoriteLanguage = favoriteLanguage;
	}

	public String[] getFavoriteColors() {
		return favoriteColors;
	}

	public void setFavoriteColors(String[] favoriteColors) {
		this.favoriteColors = favoriteColors;
	}
}
