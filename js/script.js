    /*1. I need something that locates my location wherever my device is in*/

    var url = "https://ipinfo.io/json";//this is the promise
    
    //make a fetch api request to the API to get Location
    fetch(url)
        .then(function(res) {
            //get the response and transform the data into json first
            return res.json();
        })
        .then(function(data) {
            //access the data to get the url
            var longitude = data.lon;
            var latitude = data.lat;
            var fccEndpoint = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude;
            //return fccEndpoint;
            fetch(fccEndpoint)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    //console.log(data.main.temp);
                    var buffer = "Checking the weather"
                    var temp = data.main.temp;
                    var loc = data.main.name;
                    var country = data.sys.country;
                    var icon = data.weather[0].icon;
                    console.log(country);
                    document.getElementById('cloud').innerHTML= icon;
                    document.getElementById('temp').innerHTML= temp;
                    
                    //return data;
                })
        })
        .catch(function() {
            alert('Could not retrieve location');
        })
        //get the data from fcc api

    
        
        