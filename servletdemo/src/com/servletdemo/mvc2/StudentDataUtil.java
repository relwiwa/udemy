package com.servletdemo.mvc2;

import java.util.ArrayList;
import java.util.List;

public class StudentDataUtil {

	public static List<Student> getStudents() {
		List<Student> students = new ArrayList<>();
		
		students.add(new Student("Mary", "Public", "mary@abc.com"));
		students.add(new Student("John", "Doe", "john@abc.com"));
		students.add(new Student("Ajay", "Rao", "aj@abc.com"));
		
		return students;
	}
	
}
