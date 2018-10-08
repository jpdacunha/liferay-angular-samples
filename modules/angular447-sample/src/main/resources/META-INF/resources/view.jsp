<%@page import="com.liferay.blade.npm.angular447.portlet.constants.Angular447PortletKeys"%>
<%@ include file="/init.jsp" %>

<div id="<portlet:namespace />"></div>

<aui:script require="angular447-sample@1.0.0">
	angular447Sample100.default('#<portlet:namespace />');
</aui:script>

<portlet:resourceURL var="contextURL" id="<%=Angular447PortletKeys.ANGULAR447_LOAD_CONTEXT_COMMAND %>">
</portlet:resourceURL>

url = <%=contextURL%>