<%@ Page Title="Home Page" Language="C#" AutoEventWireup="true" %>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
		<link href="Styles/layout.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.4-dist/css/bootstrap.css"/>
		<title>Greger H�lltorp</title>
	</head>

	<body>
		<% Response.WriteFile("Header.html"); %>
		<% Response.WriteFile("Menu.html"); %>
		<div id="main">
			<h3>V�lkommen</h3>
			<a href="http://www.flickr.com/photos/greger/4561251709/" title="Greger, Oliver och Anna p� Kinesiska muren"><img src="http://farm4.static.flickr.com/3604/4561251709_624d5e8d56_z.jpg" width="640" height="425" alt="Greger, Oliver och Anna p� Kinesiska muren"></a>
			<p>Hj�rtligt v�lkommen till min superinformativa sida. A work in progress if ever there was one.</p>
			<p>H�r ska det finnas (och finns en aning med) information om mig.</p>
		</div>
		<% Response.WriteFile("Footer.html"); %>
	</body>
</html>