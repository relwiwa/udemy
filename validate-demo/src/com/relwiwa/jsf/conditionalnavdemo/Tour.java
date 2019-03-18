package com.relwiwa.jsf.conditionalnavdemo;

import javax.faces.bean.ManagedBean;

@ManagedBean
public class Tour {

	private String selectedTour;

	public Tour() {}

	public String getSelectedTour() {
		return selectedTour;
	}

	public void setSelectedTour(String selectedTour) {
		this.selectedTour = selectedTour;
	}
	
	public String startTheTour() {
		if (selectedTour != null && selectedTour.contentEquals("city") ) {
			// ".xhtml" is appended automatically
			return "city_tour";
		}
		else {
			return "country_tour";
		}
	}
}
