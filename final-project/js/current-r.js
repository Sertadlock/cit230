
// var sd = document.querySelector('#tempsd');
var tempr = document.querySelector('#tempr');
// var np = document.querySelector('#tempnp');
// var r = document.querySelector('#tempr');

//change url  api.openweathermap.org/data/2.5/weather?id=2172797
var requestURLr = 'https://api.openweathermap.org/data/2.5/weather?id=5386754&APPID=f6deef6645c3c3ba07c23bcea37130c3&units=imperial';
//create new request object instance with constructor, keyword "new"
var requestr = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
requestr.open('GET', requestURLr);
requestr.responseType = 'json';
requestr.send();
requestr.onload = function () {


    var weather = requestr.response;
    console.log(weather);
    var list = weather; //work?
    console.log(list);


    // create new elements to display
    

        var myh2 = document.createElement('h2');
        var currently = document.createElement('p'); //
        var rtemp = document.createElement('p');

        myh2.textContent = "Current Weather"
        currently.textContent = list.weather[0].main;

        rtemp.textContent = list.main.temp + "F\xB0";

        tempr.appendChild(myh2);
        tempr.appendChild(currently);
        tempr.appendChild(rtemp);
        console.log(tempr);
    }







