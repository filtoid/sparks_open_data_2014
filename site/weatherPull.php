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
		var lat = <?=$_GET['lat']?$_GET['lat']:35?>;
		var lon = <?=$_GET['lon']?$_GET['lon']:139?>;
		var weatherDataURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon;
		$.getJSON(weatherDataURL, getData);
		function getData(data){
			console.debug("getData");
			console.debug(data);
			console.debug(data.weather[0].icon);
			console.debug(data.weather[0].description);
			var weatherIcon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
			console.debug(weatherIcon);
			weatherIcon = "<img src="+weatherIcon+">";
			$(weatherIcon).appendTo("#weather");
			var weatherDesc = data.weather[0].description;
			weatherDesc = "<p>"+weatherDesc+"</p>";
			$(weatherDesc).appendTo("#weather");
		}
		console.debug("end");
	</script>
</body>
</html>