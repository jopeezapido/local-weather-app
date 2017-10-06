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
                var apiKey = "b38013bebe4a08f776f9ba995d7693b0";
                var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                return url;
            }

            function error(positionError) {
                alert("Unable to retrieve geolocation");
            }

        } else {
            alert("Your browser does not support geolocation");
        }

    }//end of getCoords function
     getCoords();//execute getCoords function to get the latitude and longitude of the location of the device, if successful.

    /*2. I need something that gets the weather in the location mentioned in number 1.1*/
    



});//end of document.ready