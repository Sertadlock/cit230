window.onload = fillClosure;
function fillClosure() {

//var header = document.querySelector('header'); look for this section in html
//var section = document.querySelector('section');
var aside = document.querySelector('aside'); //look for this section in html


var requestURL = 'js/json.json';


//create new request object instance with constructor, keyword "new"

var request = new XMLHttpRequest();
//open a new request using open() menthod
//takes two parameters, get is a method to make request, 
//the second is the URL, which is stored in a variable above 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var closureInfo = request.response;

    showData(closureInfo);
    

}

//This create and displays Hero cards
function showData(jsonObj) {
    //Set members property (part of the object) to a new variable
    console.log(jsonObj);

    var closure = jsonObj['closure'];


    // go through each hero and create new elements to display
    for (var i = 0; i < closure.length; i++) {
        if (closure[i].city == "la") {
         
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var templeClosures = document.createElement('li');

            //sets variable myH2 to heroes city for each loop. (textContext)
            myH2.textContent = "Temple Closure Schedule";
            //Fills paragraph variables above with properties for the specified hero
            
            templeClosures.textContent = closure[i].events.toString();

            myArticle.appendChild(myH2);
            
            myArticle.appendChild(templeClosures);

            aside.appendChild(myArticle);

        }

    }
}
}