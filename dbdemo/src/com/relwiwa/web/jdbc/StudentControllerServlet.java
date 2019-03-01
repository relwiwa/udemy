package com.relwiwa.web.jdbc;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

/**
 * Servlet implementation class StudentControllerServlet
 */
@WebServlet("/StudentControllerServlet")
public class StudentControllerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private StudentDbUtil studentDbUtil;
	
	// connection pool will be injected
	@Resource(name="jdbc/web_student_tracker")
	private DataSource dataSource;

	// work that is usually done in constructor is done in init method when using servlets
	@Override
	public void init() throws ServletException {
		super.init();
		
		try {
			studentDbUtil = new StudentDbUtil(dataSource);
		}
		catch (Exception exc){
			throw new ServletException(exc);
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			listStudents(request, response);
		}
		catch (Exception exc) {
			throw new ServletException(exc);
		}
	}

	private void listStudents(HttpServletRequest request, HttpServletResponse response) throws Exception {
		List<Student> students = studentDbUtil.getStudents();
		request.setAttribute("STUDENT_LIST", students);
		RequestDispatcher dispatcher = request.getRequestDispatcher("/list-students.jsp");
		dispatcher.forward(request, response);
	}

}
