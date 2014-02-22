function loaded(){
	// Called when the doc has finished loading
	var gridref = new Object();
	gridref.northing = 565136;
	gridref.easting = 425351;
	//var os = new OsGridRef(425351,565136);
	
	var os1 = new OSRef(gridref.easting, gridref.northing);
	//document.write("OS Grid Reference: " + os1.toString() + " - " + os1.toSixFigureString() + "<br />");
	var ll1 = os1.toLatLng();
	//document.write("Converted to Lat/Long: " + ll1.toString());
	
     
}