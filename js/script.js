$(document).ready(function() {
    /*$ajax({
        url: ,
        dataType: JSON,
        success: geoFindMe()

    })*/

    function getCoords() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("Your browser does not support geolocation.");
        }
    }

    function success(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var apiKey = "b38013bebe4a08f776f9ba995d7693b0";
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;console.log(url);
        return url;
     };

     function error() {
         alert('Unable to retriev location.')
     }

     getCoords();

});//end of document.ready