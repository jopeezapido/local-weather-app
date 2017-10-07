    /*1. I need something that locates my location weherever my device is in*/

    var url = "http://ip-api.com/json";//this is the promise
    
    //make a fetch api request to the API to get Location
    fetch(url)
        .then(function(res) {
            //get the response and transform the data into json first
            var jzone= res.json();
            //console.log(jzone);
            return jzone;
        })
        .then(function(data) {
            //access the data to get the url
            var longitude = data.lon;
            var latitude = data.lat;
            var fccEndpoint = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude;
            console.log(fccEndpoint);
            return fccEndpoint;
        })
        //get the data from fcc
        .then(function(weatherData) {
            console.log(weather[0].icon);
            
        })
        