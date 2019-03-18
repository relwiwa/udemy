package com.relwiwa.jsf.scopedemo;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
// RequestScoped is default scope of beans
@RequestScoped
public class Counter3 {
	private int value = 0;
		
	public Counter3() {}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public String increment() {
		value++;
		return "counter";
	}
}
