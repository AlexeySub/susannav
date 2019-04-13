function coord() {
	console.log(1);

	    navigator.geolocation.getCurrentPosition(function(position) {
 

        // Текущие координаты.

        var lat = position.coords.latitude;
        alert(lat);

        var lng = position.coords.longitude;
    	alert(lng)})
}
