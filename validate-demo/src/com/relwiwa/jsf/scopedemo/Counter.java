package com.relwiwa.jsf.scopedemo;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean
@ApplicationScoped
public class Counter {
	private int value = 0;
		
	public Counter() {}

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
