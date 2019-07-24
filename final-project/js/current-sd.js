
// var sd = document.querySelector('#tempsd');
var tempsd = document.querySelector('#tempsd');
// var np = document.querySelector('#tempnp');
// var r = document.querySelector('#tempr');

//change url  api.openweathermap.org/data/2.5/weather?id=2172797
var requestURLsd = 'https://api.openweathermap.org/data/2.5/weather?id=5363943&APPID=f6deef6645c3c3ba07c23bcea37130c3&units=imperial';
//create new request object instance with constructor, keyword "new"
var requestsd = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
requestsd.open('GET', requestURLsd);
requestsd.responseType = 'json';
requestsd.send();
requestsd.onload = function () {


    var weather = requestsd.response;
    console.log(weather);
    var list = weather; //work?
    console.log(list);


    // create new elements to display
    

        var myh2 = document.createElement('h2');
        var currently = document.createElement('p'); //
        var sdtemp = document.createElement('p');

        myh2.textContent = "Current Weather"
        currently.textContent = list.weather[0].main;

        sdtemp.textContent = list.main.temp + "F\xB0";

        tempsd.appendChild(myh2);
        tempsd.appendChild(currently);
        tempsd.appendChild(sdtemp);
        console.log(tempsd);
    }







