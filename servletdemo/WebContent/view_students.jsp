<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>
<c:forEach var="tempStudent" items="${student_list}">
	<p>${tempStudent}</p>
</c:forEach>
</body>
</html>