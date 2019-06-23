

//var header = document.querySelector('header');
//var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//create new request object instance with constructor, keyword "new"
var request = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townInfo = request.response;
    
    showData(townInfo);

}

//This create and displays Hero cards
function showData(jsonObj) {
    //Set members property (part of the object) to a new variable
    var towns = jsonObj['towns'];
    var displayTown = "Fish Haven";

    // go through each hero and create new elements to display
    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == displayTown)
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        //sets variable myH2 to heroes name for each loop. (textContext)
        myH2.textContent = towns[i].name;
        //Fills paragraph variables above with properties for the specified hero
        myPara1.textContent = towns[i].motto;
        myPara2.textContent = "Year Founded" + towns[i].yearFounded;
        myPara3.textContent = "Current Population" + towns[i].currentPopulation;
        myPara4.textContent = "Annual Rain Fall" + towns[i].averageRainfall;
       
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);

       
    }

