
// var sd = document.querySelector('#tempsd');
var tempnp = document.querySelector('#tempnp');
// var np = document.querySelector('#tempnp');
// var r = document.querySelector('#tempr');

//change url  api.openweathermap.org/data/2.5/weather?id=2172797
var requestURLnp = 'https://api.openweathermap.org/data/2.5/weather?id=5376890&APPID=f6deef6645c3c3ba07c23bcea37130c3&units=imperial';
//create new request object instance with constructor, keyword "new"
var requestnp = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
requestnp.open('GET', requestURLnp);
requestnp.responseType = 'json';
requestnp.send();
requestnp.onload = function () {


    var weather = requestnp.response;
    console.log(weather);
    var list = weather; //work?
    console.log(list);


    // create new elements to display
    

        var myh2 = document.createElement('h2');
        var currently = document.createElement('p'); //
        var nptemp = document.createElement('p');

        myh2.textContent = "Current Weather"
        currently.textContent = list.weather[0].main;

       nptemp.textContent = list.main.temp + "F\xB0";

        tempnp.appendChild(myh2);
        tempnp.appendChild(currently);
        tempnp.appendChild(nptemp);
        console.log(tempnp);
    }







