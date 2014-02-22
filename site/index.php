<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="js/connect.js"></script>
	<script type="text/javascript" src="js/jscoord-1.1.1.js"></script>
	<link rel="stylesheet" type="text/css" href="js/leaflet.css" />
	
	<link rel="stylesheet" type="text/css" href="css/button_styles.css" />
<script type="text/javascript" src="js/leaflet.js"></script>
<script type="text/javascript" src="js/leafletembed.js"></script>
<link rel="stylesheet" 
href="https://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.css" />
     <script 
src="https://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.js"></script>
</head>

<body onload="loaded();">
<div id="banner">
<h1>Sparks Open Data Event</h1>
<br>
</div>
<br>
<!-- 54.98010777115042, -1.6038523304540302
<img src="http://maps.googleapis.com/maps/api/staticmap?center=54.98010777115042,-1.6038523304540302&zoom=14&size=200x200&sensor=false">-->
<div id="output"></div>

     <script type="text/javascript">
        
         $( document ).ready(function() {
             //load map
             
});
 
     </script>
<iframe id="iframe_weather" src="weatherPull.php"></iframe> 
<div id="picture_item">No image Available</div>
<div id="map" style="height:400px; width:800px"></div>
<div class="classname" onclick="prev_click()">Prev</div>
<div class="classname" onclick="next_click()">Next</div>
</body>
</html>