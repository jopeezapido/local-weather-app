$(document).ready(function() {
    
   function geoFindMe() {  
 
         function supportCheck() {
             if(!navigator.geolocation) {
                 $('#box').html("Location not read by the browser");
             }
         };
         
         function success(position) {
             var lat = position.coords.latitude;
             var lon = position.coords.longitude;
             var apiKey = "b38013bebe4a08f776f9ba995d7693b0";
             var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
             console.log(url);
             return url;
         };
 
         function error() {
             $('#box').html('Unable to get location.');
         };
 
         navigator.geolocation.getCurrentPosition(success, error);
         
    }//end of geoFindMe function

    geoFindMe();

});//end of document.ready