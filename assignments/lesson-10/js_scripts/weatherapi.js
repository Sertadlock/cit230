var aside = document.querySelector('aside'); //look for this section in html
var table = document.createElement('table');
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');



var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f6deef6645c3c3ba07c23bcea37130c3&units=imperial';
//create new request object instance with constructor, keyword "new"
var request = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
request.open('GET', requestURL);
request.send();
request.onload = function () {


    var weather = JSON.parse(request.responseText);
    console.log(weather);
    var list = weather.list;
    console.log(list);
    
var tr1 = document.createElement('tr');
var tr2 = document.createElement('tr');
var tr3 = document.createElement('tr');
var myimg = document.createElement('img');



    // go through each hero and create new elements to display
    for (var i = 0; i < list.length; i++) {
        var time = list[i].dt_txt;
        var myth1 = document.createElement('th');
        var mytd1 = document.createElement('td');
        var mytd2 = document.createElement('td');
        var myimg = document.createElement('img');
        

        if (time.includes('18:00:00')) {
            console.log("found item");
            var temp = list[i].main.temp;
            var icon = list[i].weather[0].icon;
            console.log(temp,icon);

            var path = "http://openweathermap.org/img/w/" + icon + ".png";
            console.log(path);

            myimg.setAttribute('src', path);

            myth1.textContent = "Day"; //call function
            mytd1.textContent = temp ;
            mytd2.appendChild(myimg);
            

            tr1.appendChild(myth1);
            tr2.appendChild(mytd1);
            tr3.appendChild(mytd2);

            
        }
        thead.appendChild(tr1);
        tbody.appendChild(tr2);
        
        tbody.appendChild(tr3);
        

        

    }
    table.appendChild(thead);
    table.appendChild(tbody);
    aside.appendChild(table);
    console.log(thead,tbody);
}

function dayOfWeek() {
    var d = new day();
    document.getElementById("date").innerHTML = d.toUTCString();

}