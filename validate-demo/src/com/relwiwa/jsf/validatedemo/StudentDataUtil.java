package com.relwiwa.jsf.validatedemo;

import java.util.ArrayList;
import java.util.List;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean
@ApplicationScoped
public class StudentDataUtil {
	private List<Student> students;

	public StudentDataUtil() {
		loadSampleData();
	}

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}
	
	public void loadSampleData() {
		students = new ArrayList<Student>();
		students.add(new Student("Mary", "Public", "mary@ab.com"));
		students.add(new Student("John", "Doe", "john@ab.com"));
		students.add(new Student("Michael", "Prince", "michael@ab.com"));		
	}
	
}
