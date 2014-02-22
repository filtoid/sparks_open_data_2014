<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
	<script type="text/javascript" src="js/connect.js"></script>
</head>

<body>
	<div id="weather"></div>
	<script>
		console.debug("start");
		var weatherDataURL = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139";
		function getData(data){
			console.debug("getData");
			console.debug(data);
			var theIcon = data.weather[0].icon;
			console.debug(theIcon);
			
			$("<p>test</p>").appendTo("#weather");
		}
		$.getJSON(weatherDataURL, getData);
		console.debug("end");
	</script>
</body>
</html>