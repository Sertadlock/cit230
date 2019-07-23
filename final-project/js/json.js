// window.onload = fillClosure();
// function fillClosure() {

//var header = document.querySelector('header'); look for this section in html
//var section = document.querySelector('section');
// var aside = document.querySelector('aside'); //look for this section in html
// var la = document.getElementByClassName('la');
var sd = document.querySelector('#sd');
var la = document.querySelector('#la');
var np = document.querySelector('#np');
var r = document.querySelector('#r');

var requestURL = 'directory/temples.json';



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

    var closure = jsonObj['temples'];


    // go through each hero and create new elements to display
    for (var i = 0; i < closure.length; i++) {
        if (closure[i].name == "la") {

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var templeClosures = document.createElement('p');

            //sets variable myH2 to heroes city for each loop. (textContext)
            myH2.textContent = "Temple Closure Schedule";
            //Fills paragraph variables above with properties for the specified hero
console.log(closure[i].name);
            templeClosures.textContent = closure[i].name.closureSchedule;

            myArticle.appendChild(myH2);

            myArticle.appendChild(templeClosures);


            la.appendChild(myArticle);
            console.log(la);
            //la instead 
        }
        // add if
        if (closure[i].name == "sd") {

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var templeClosures = document.createElement('p');

            //sets variable myH2 to heroes city for each loop. (textContext)
            myH2.textContent = "Temple Closure Schedule";
            //Fills paragraph variables above with properties for the specified hero

            templeClosures.textContent = closure[i].name.closureSchedule;

            myArticle.appendChild(myH2);

            myArticle.appendChild(templeClosures);


            sd.appendChild(myArticle);
        }
        if (closure[i].name == "np") {

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var templeClosures = document.createElement('p');

            //sets variable myH2 to heroes city for each loop. (textContext)
            myH2.textContent = "Temple Closure Schedule";
            //Fills paragraph variables above with properties for the specified hero

            templeClosures.textContent = closure[i].name.closureSchedule;

            myArticle.appendChild(myH2);

            myArticle.appendChild(templeClosures);


            np.appendChild(myArticle);
        }

        if (closure[i].name == "r") {

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var templeClosures = document.createElement('p');

            //sets variable myH2 to heroes city for each loop. (textContext)
            myH2.textContent = "Temple Closure Schedule";
            //Fills paragraph variables above with properties for the specified hero

            templeClosures.textContent = closure[i].name.closureSchedule;

            myArticle.appendChild(myH2);

            myArticle.appendChild(templeClosures);


            r.appendChild(myArticle);
        }
    }
}
// }