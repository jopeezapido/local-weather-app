    /*1. I need something that locates my location weherever my device is in*/

    var url = "http://ip-api.com/json";//this is the promise
    
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
            console.log(fccEndpoint);
            //return fccEndpoint;
            fetch(fccEndpoint)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    var temp = data.main.temp;
                    var loc = data.main.name;
                    var country = data.sys.country;
                    var imgLink = data.weather[0].icon;
                    console.log(imgLink);
                    document.getElementById('cloud').setAttribute("src", imgLink);
                    document.getElementById('temp').innerHTML= temp;
                    //return data;
                    
                })
        })
        .catch(function() {
            alert('Could not retrieve location');
        })
        






    
        
        