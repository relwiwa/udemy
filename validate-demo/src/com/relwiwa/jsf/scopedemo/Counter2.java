package com.relwiwa.jsf.scopedemo;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean
@SessionScoped
public class Counter2 {
	private int value = 0;
		
	public Counter2() {}

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
