<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<html>
<body>
<c:set var="data" value="something" />
<p>Length of the string <b>${data}</b>: ${fn:length(data)}</p>
<p>Uppercase version of the string <b>${data}</b>: ${fn:toUpperCase(data)}</p>
<p>Does the string <b>${data}</b> start with so? ${fn:startsWith(data, "so")}</p>
</body>
</html>