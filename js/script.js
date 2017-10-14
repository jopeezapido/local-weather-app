    /*1. I need something that locates my location weherever my device is in*/

    var url = "https://ipinfo.io/json";//this is the promise
    
    //make a fetch api request to the API to get Location
    fetch(url)
        .then(function(res) {
            //get the response and transform the data into json first
            return res.json();
        })
        .then(function(data) {
            //access the data to get the url
            //something to separate the strings and put them into an array
            var location= data.loc;//a string
            location = location.split('');//splits seach character returns an array

            //get the index of the comma in the array
            var ind = location.indexOf(',');

            //join the 2 arrays into a string again
            var joint = location.join("");

            //get the values of each string
            var latitude = joint.substring(0, ind);
            var longitude = joint.substring(ind + 1);


            var fccEndpoint = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude;
            console.log(fccEndpoint);
            fetch(fccEndpoint)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    var imgLink = "https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399";
                    var desc= data.weather[0].description;
                    var celc = Math.floor(data.main.temp);
                    var far= Math.floor(((celc * 9)/5)+32);
                    var celcStr = celc.toString();
                    var farStr = far.toString();
                    var loc = data.name;
                    var country = data.sys.country;
                    var button = document.getElementById('convert');
                    
                    //render image
                    document.getElementById('cloud').setAttribute("src", imgLink);

                    //render sky description
                    document.getElementById('cloud-desc').innerHTML= desc;

                    //by default shown temp is celcius
                    document.getElementById('temp').innerHTML= celcStr + '&#176';

                    //set location
                    document.getElementById('location').innerHTML= loc + ", " + country;

                    //everytime button is clicked, text will change from 'to F' or 'to C
                        
                    $('button').click(function() {

                            if(button.textContent == "Convert to Celcius") {
                                button.textContent = 'Convert to Farenheit';
                                //formula to convert to Farenheit
                                console.log(far.toString());
                                document.getElementById('temp').innerHTML = celcStr.replace(/\W\D\S/g, farStr) + '&#176';

                            } else {
                                button.textContent = 'Convert to Celcius';
                                //formula to convert to celcius
                                console.log(celc.toString());
                                document.getElementById('temp').innerHTML = farStr.replace(/\W\D\S]/g, celcStr) + '&#176';
                            }
                        })
                    });          
                })
                .catch(function() {
                    alert('Could not retrieve location');
                })