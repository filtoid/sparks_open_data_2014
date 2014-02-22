function loaded(){
	// Called when the doc has finished loading
	
	var temp = btoa("sparks_event_phil:Yb2klicnjr^Y");
	$.getJSON( "getjson.php", function( json ) {
		
		var output = new Array();
		
		var ret = eval(json);
		for(var i=0;i<ret.length;i++){
			var coords = ret[i].definitions[0].point;
			
			var os1 = new OSRef(coords.easting, coords.northing);
			var ll1 = os1.toLatLng();
			output[i].point = ll1;
			output[i].name = ret[i].definitions[0].longDescription;
			//output += "<img src=\"http://maps.googleapis.com/maps/api/staticmap?center=" + ll1.lat +"," + ll1.lng+"&zoom=14&size=200x200&sensor=false&key=AIzaSyADV_yN8ZE8qx-pkpzNEbFSwCvMfW4hpxM\">";
		}
		
		//$("#output").html(output);
		
		var map = L.map('map').setView([output.point.lat, output.point.lng], 13);
		
		//alert("test");	//console.log( "JSON Data: " + json.users[ 3 ].name );
	});
	
}



/*	OLD CODE
	  data: '{"username": "' + username + '", "password" : "' + password + '"}',

  beforeSend: function(xhr){
				xhr.setRequestHeader("Authentication", "Basic " + encodeBase64( "sparks_event_phil:Yb2klicnjr^Y"));
			},
		  


var gridref = new Object();
	gridref.northing = 565136;
	gridref.easting = 425351;
	//var os = new OsGridRef(425351,565136);
	
	var os1 = new OSRef(gridref.easting, gridref.northing);
	//document.write("OS Grid Reference: " + os1.toString() + " - " + os1.toSixFigureString() + "<br />");
	var ll1 = os1.toLatLng();
	//document.write("Converted to Lat/Long: " + ll1.toString());
	*/