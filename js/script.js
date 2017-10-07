$(document).ready(function() {
    /*I need something that locates my location weherever my device is in*/

    //check the browser support of the navigator object using the geolocation property
    function getCoords() {

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
            //check the if the search for the device's location is succesful or if not
            function success(position) {
                //get details for the url
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var url = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + lat + "&lon=" + lon;
                console.log(url);
                return url;
            };
            
            function error(positionError) {
                alert("Unable to retrieve geolocation");
            };

        } else {
            alert("Your browser does not support geolocation");
        };

    };//end of getCoords function
    //getCoords();//execute getCoords function to get the latitude and longitude of the location of the device, if successful.

    /*1.2 I need something that gets the weather in the location mentioned in number 1.1*/
    var url = getCoords();
    $.ajax(url, {
        success: function() {
            //handle the JSON data here
            console.log(main.temp);
        }
    });

});//end of document.ready