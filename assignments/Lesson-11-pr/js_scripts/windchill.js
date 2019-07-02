
// formula for converting to windchill factor

var tempF = document.getElementById('temperature').innerHTML;
var speed = document.getElementById('windSpeed').innerHTML;
var result = windChill(tempF, speed);

document.getElementById('output').innerHTML = result;


function windChill(tempF, speed) {
    var result = parseInt(35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed,0.16) + 0.4275 * tempF * Math.pow(speed,0.16));
    return result;
    }
   