var output =null;
var cams = null;
 var map=null;
 var curMarker = 0;
 var finishedLoading = false;
 
 function loadCams(){
	 $.getJSON( "getcams.php", function( json ) {
		
		cams= new Array();
		
		var ret = eval(json);
		for(var i=0;i<ret.length;i++){
			var item = ret[i].dynamics[0].image;
			var id= ret[i].systemCodeNumber;
			
			for(var j=0;j<output.length;j++){
				var itm = output[j];
				if(output[j].id==id){
					output[j].image = item;
				}
			}
			
		}
	});
 }
 
function loaded(){
	// Called when the doc has finished loading
	
	var temp = btoa("sparks_event_phil:Yb2klicnjr^Y");
	$.getJSON( "getjson.php", function( json ) {
		
		output= new Array();
		
		var ret = eval(json);
		for(var i=0;i<ret.length;i++){
			var coords = ret[i].definitions[0].point;
			
			var os1 = new OSRef(coords.easting, coords.northing);
			var ll1 = os1.toLatLng();
			output[i] =new Object();
			
			output[i].point = ll1;
			output[i].name = ret[i].definitions[0].longDescription;
			output[i].id = ret[i].systemCodeNumber;
		}
		
		map = L.map('map').setView([output[0].point.lat, output[0].point.lng], 13);
		//map = L.map('map').setView([54.900, -1.166], 13);
		L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapquest.com">MapQuest</a>',
                 maxZoom: 18
             }).addTo(map);
 
	     
	     
             //geolocate
             map.locate({setView: true, maxZoom: 16});
		
		//var circle = 
		output[0].marker = L.marker([output[0].point.lat, output[0].point.lng]).addTo(map);
		output[0].marker.bindPopup(output[0].name).openPopup();
			
		for(var i=1;i<output.length;i++){
			
			output[i].marker = L.marker([output[i].point.lat, output[i].point.lng]).addTo(map);
			//output[i].circle = L.circle([output[i].point.lat, output[i].point.lng], 50, {
			//	color: 'red',
			//	fillColor: '#f03',
			//	fillOpacity: 0.5
			//}).addTo(map);
	     	
		}
	});

	loadCams();
	updatePic();
	finishedLoading=true;
	
}
function next_click(){
	
	if(!finishedLoading)
		return;
	
	output[curMarker].marker.closePopup();
	curMarker+=1;
	if(curMarker>=curMarker.length)
		curMarker=0;
	output[curMarker].marker.bindPopup(output[curMarker].name).openPopup();
	
	var iframe = $('#iframe_weather');
	$('#iframe_weather').src = "weatherPull.php?lat="+output[curMarker].point.lat+"&lng="+output[curMarker].point.lng;
	updatePic();
	
	//iframe.contentWindow.location.reload(true);
	
	//weatherPull.php?
	
}

function prev_click(){
	
	if(!finishedLoading)
		return;
	
	output[curMarker].marker.closePopup();
	curMarker-=1;
	if(curMarker<0)
		curMarker = output.length-1;
	
	output[curMarker].marker.bindPopup(output[1].name).openPopup();
	updatePic();
	
	
}

function updatePic(){
	
	if(!finishedLoading)
		return;
	
	if(output[curMarker].image!=null){
		$('#picture_item').html("<img src='"+output[curMarker].image+"'>");
	}
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