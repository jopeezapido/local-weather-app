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
                    var imgLink = "https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399";
                    var desc= data.weather[0].description;
                    var celc = data.main.temp;
                    var loc = data.name;
                    var country = data.sys.country;
                    var button = document.getElementById('convert');
                    
                    //render image
                    document.getElementById('cloud').setAttribute("src", imgLink);

                    //render sky description
                    document.getElementById('cloud-desc').innerHTML= desc;

                    //by default shown temp is celcius
                    document.getElementById('temp').innerHTML= celc;

                    //set location
                    document.getElementById('location').innerHTML= loc + ", " + country;

                    /*var cToF = {
                        'celcius': ,
                        'farenheit': ,

                    }*/

                    //if button is clicked, celcius temp will be converted to farenheit. Shown text should 'convert to celcius'


                    //if button is clicked again, farenheit temp will be converted to celcius. Shown text should be 'convert to farenheit'
                
                })
        })
        .catch(function() {
            alert('Could not retrieve location');
        })
        






    
        
        