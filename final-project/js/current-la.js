
// var sd = document.querySelector('#tempsd');
var la = document.querySelector('#templa');
// var np = document.querySelector('#tempnp');
// var r = document.querySelector('#tempr');

//change url  api.openweathermap.org/data/2.5/weather?id=2172797
var requestURLla = 'https://api.openweathermap.org/data/2.5/weather?id=1687979&APPID=f6deef6645c3c3ba07c23bcea37130c3&units=imperial';
//create new request object instance with constructor, keyword "new"
var requestla = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
requestla.open('GET', requestURLla);
requestla.responseType = 'json';
requestla.send();
requestla.onload = function () {


    var weather = requestla.response;
    console.log(weather);
    var list = weather; //work?
    console.log(list);


    // create new elements to display
    for (var i = 0; i < list.length; i++) {
       
       
        var currently = document.createElement('p'); //
        var temp = document.createElement('p');
       
        currently.textContent = list.weather[0].main;
        temp.textContent = list.main.temp;

        la.appendChild(currenly);
        la.appendChild(temp);
        

    }
    



}




