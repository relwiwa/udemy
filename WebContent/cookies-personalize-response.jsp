<%@ page import="java.net.URLEncoder" %>

<html>
<body>
<%
	// read form data
	String favLang = request.getParameter("favoriteLanguage");
	favLang = URLEncoder.encode(favLang, "UTF-8");

	// create cookie
	Cookie theCookie = new Cookie("myApp.favoriteLanguage", favLang);
	
	// set the life span of the cookie in seconds
	theCookie.setMaxAge(60*60*24*365);
	
	// send cookie to browser
	response.addCookie(theCookie);
%>
<p>Thanks we set your favorite language to ${param.favoriteLanguage}</p>
<p><a href="cookies-homepage.jsp">Return to homepage</a>
</body>
</html>