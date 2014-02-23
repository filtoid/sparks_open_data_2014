<!DOCTYPE html>
<html>
<head>
	<!-- 3rd party-->
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<link rel="stylesheet" type="text/css" href="js/leaflet.css" />
	<script type="text/javascript" src="js/leaflet.js"></script>
	<script type="text/javascript" src="js/leafletembed.js"></script>
	<link rel="stylesheet" 
href="https://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.css" />
    <script 
src="https://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.js"></script>
	
	<!-- project specific -->
	<script type="text/javascript" src="js/jscoord-1.1.1.js"></script>
	<script type="text/javascript" src="js/connect.js"></script>	
	<link rel="stylesheet" type="text/css" href="css/button_styles.css" />
</head>

<body onload="loaded();" style="background-color:lightgrey">
	<div id="banner">
		<h1>Sparks Open Data Event 2104</h1><br>
	</div>

	<!-- 54.98010777115042, -1.6038523304540302
	<img src="http://maps.googleapis.com/maps/api/staticmap?center=54.98010777115042,-1.6038523304540302&zoom=14&size=200x200&sensor=false">-->
	<div id="output"></div>
	<iframe id="iframe_weather" src="weatherPull.php"></iframe> 
	<div id="picture_item">No image Available</div>
	<div id="map" style="height:400px; width:800px"></div>

	<!-- buttons along the bottom-->
	<div class="classname" onclick="prev_click()">Prev</div>
	<div class="classname" onclick="next_click()">Next</div>
</body>
</html>