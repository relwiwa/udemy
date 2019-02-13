<html>
<body>
	<!-- no check of form input is happening, malcontent gets executed -->
	<p>The student is confirmed: ${param.firstname} ${param.lastname}</p>
	<p>The student's country: ${param.country}</p>
	<p>The student's favorite language: ${param.favoriteLanguage}</p>
	<p>The student's known languages:
		<ul>
			<%
				String[] langs = request.getParameterValues("knownLanguages");
				if (langs != null) {
					for (String tempLang: langs) {
						out.println("<li>" + tempLang + "</li>");
					}
				}
			%>
		</ul>
	</p>
</body>
</html>