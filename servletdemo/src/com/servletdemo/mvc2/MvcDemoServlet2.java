package com.servletdemo.mvc2;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.List;

/**
 * Servlet implementation class MvcDemoServlet2
 */
@WebServlet("/MvcDemoServlet2")
public class MvcDemoServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MvcDemoServlet2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// step 1: get data from student helper class
		List<Student> students = StudentDataUtil.getStudents();
		
		// step 2: add data to request object
		request.setAttribute("student_list",  students);
		
		// step 3: get request dispatcher
		RequestDispatcher dispatcher = request.getRequestDispatcher("view_students2.jsp");
		
		// step 4: forward to JSP
		dispatcher.forward(request, response);
	}
}
