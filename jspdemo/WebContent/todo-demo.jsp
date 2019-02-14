<%@ page import="java.util.*" %><html>

<body>

<!-- Step 1: Create HTML form -->
<form action="todo-demo.jsp">
	Add new item: <input type="text" name="theItem" />
	<input type="submit" value="Submit" />
</form>

<!-- Step 2: Add new item to "To do" list -->
<%
	List<String> items = (List<String>) session.getAttribute("myToDoList");

	if (items == null) {
		items = new ArrayList<String>();
		session.setAttribute("myToDoList", items);
	}
	
	String theItem = request.getParameter("theItem");
	if (theItem != null && !theItem.trim().equals("")) {
		items.add(theItem);
	}
%>

<!-- Step 3: Display all "To do" items from session -->
<hr />
<h1>To Do List Items:</h1>
<ol>
<%
	for (String temp: items) {
		out.println("<li>" + temp + "</li>");
	}
 %>
</ol>

</body>
</html>