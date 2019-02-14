<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<c:set
	var="theLocale"
	value="${not empty param.theLocale ? param.theLocale : pageContext.request.locale}"
	scope="session"
/>

<fmt:setLocale value="${theLocale}" />
<fmt:setBundle basename="com.tagdemo.i18n.resources.mylabels" />

<html>
<body>

<p>
	<a href="i18n-messages-test.jsp?theLocale=en_US">English (US)</a> |
	<a href="i18n-messages-test.jsp?theLocale=es_ES">Spanish (ES)</a> |
	<a href="i18n-messages-test.jsp?theLocale=de_DE">German (DE)</a>
</p>

<hr />

<h3><fmt:message key="label.greeting" /></h3>
<p><fmt:message key="label.firstname" /> <i>John</i></p>
<p><fmt:message key="label.lastname" /> <i>Doe</i></p>
<p><fmt:message key="label.welcome" /></p>

<hr />

<p>Selected locale: ${theLocale}</p>

</body>
</html>