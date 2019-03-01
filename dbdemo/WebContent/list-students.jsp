<%@ page import="java.util.*, com.relwiwa.web.jdbc.*" %>

<!DOCTYPE html>
<html>
<head>
<title>Student Tracker App</title>
</head>
<%
List<Student> theStudents = 
(List<Student>) request.getAttribute("STUDENT_LIST");
%>
<body>
<div id="wrapper">
	<div id="header">
		<h2>Foo Bar University</h2>
	</div>
	
	<div id="container">
		<div id="content">
			<table>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
				</tr>
				
				<% for (Student tempStudent : theStudents) { %>
				
					<tr>
						<td> <%= tempStudent.getFirstName() %> </td>
						<td> <%= tempStudent.getLastName() %> </td>
						<td> <%= tempStudent.getEmail() %> </td>
					</tr>
				
				<% } %>
	
			</table>
		</div>
	</div>
</div>
</body>
</html>