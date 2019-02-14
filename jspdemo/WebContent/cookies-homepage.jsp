<%@ page import="java.net.URLDecoder" %>

<html>
<body>
<h3>Training Portal</h3>
<%
	// default value if there are no cookies
	String favLang = "Java";
	
	// get the cookies from the browser request
	Cookie[] theCookies = request.getCookies();
	
	// find favorite language cookie
	if (theCookies != null) {
		for (Cookie tempCookie : theCookies) {
			if ("myApp.favoriteLanguage".equals(tempCookie.getName())) {
				favLang = URLDecoder.decode(tempCookie.getValue(), "UTF-8");
				break;
			}
		}
	}
%>
<!-- now show a personalized page based on the cookie info -->
<h4>New books for <%= favLang %></h4>
<ul>
	<li>.....</li>
	<li>....</li>
</ul>
<h4>Latest news for <%= favLang %></h4>
<ul>
	<li>.....</li>
	<li>....</li>
</ul>
<h4>Latest jobs for <%= favLang %></h4>
<ul>
	<li>.....</li>
	<li>....</li>
</ul>
<p><a href="cookies-personalize-form.html">Personalize page</a></p>
</body>
</html>