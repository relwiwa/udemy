package com.servletdemo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TestParamServlet
 */
@WebServlet("/TestParamServlet")
public class TestParamServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestParamServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		// Step 1: read configuration parameters
		ServletContext context = getServletContext();
		String maxCartSize = context.getInitParameter("max-shopping-cart-size");
		String teamName = context.getInitParameter("project-team-name");
		
		// Step 2: Generate HTML
		out.println("<html><body>");
		out.println("<p>Max. cart: " + maxCartSize + "</p>");
		out.println("<p>Team name: " + teamName + "</p>");
		out.println("</body></html>");		
	}
}
