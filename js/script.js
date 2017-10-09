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
                    var celc = data.main.temp;
                    var loc = data.main.name;
                    var country = data.sys.country;
                    var imgLink = data.weather[0].icon;
                    var button = document.getElementById('convert');
                    
                    //render image
                    document.getElementById('cloud').setAttribute("src", imgLink);

                    //by default shown temp is celcius
                    document.getElementById('temp').innerHTML= temp;

                    var cToF = {
                        'celcius': ,
                        'farenheit': ,

                    }

                    //if button is clicked, celcius temp will be converted to farenheit. Shown text should 'convert to celcius'




                    //if button is clicked again, farenheit temp will be converted to celcius. Shown text should be 'convert to farenheit'
                
                    
                })
        })
        .catch(function() {
            alert('Could not retrieve location');
        })
        






    
        
        