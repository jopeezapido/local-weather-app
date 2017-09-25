$(document).ready(function() {
    
   function geoFindMe() {  
 
         function supportCheck() {
             if(!navigator.geolocation) {
                 $('#box').html("Location not read by the browser");
             }
         };
         
         function success(position) {
             var latitude = position.coords.latitude;
             var longitude = position.coords.longitude;
            $('#box').html("Latitude: " + latitude + "<br>Longitude: " + longitude)
         };
 
         function error() {
             $('#box').html('Unable to get location.');
         };
 
         navigator.geolocation.getCurrentPosition(success, error);
         
    }//end of geoFindMe function

    geoFindMe();

});//end of document.ready