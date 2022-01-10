var title = document.getElementById("id1");
var pMainText = document.querySelector("p");
var link = document.getElementsByTagName("a")[0];
var classText = document.querySelector(".class");
var allPA = document.querySelectorAll("a, p");
// ALL *
function allFunc() {
  var allElem = document.querySelectorAll("*");
  for (var i = allElem.length - 1; i>=0; i--){
    allElem[i].style.color = "red";
    allElem[i].style.textDecoration = "none";
  }
}
allFunc();
// p
pMainText.style.color = "brown";

// .class
classText.style.color = "green";

// a
link.style.cssText = "font-weight: bold; font-style: italic; text-decoration: underline;"

// p. a
// pMainText.style.textTransform = "uppercase";
// link.style.textTransform = "uppercase";
allPA[0].style.textTransform = "uppercase";
allPA[1].style.textTransform = "uppercase";

//Add Class
var allClass = document.querySelectorAll("*");

for (var i = allClass.length - 1; i>=0; i--){
  
  if (allClass[i].className){
    allClass[i].classList.add("newclass");
    console.log(allClass[i], allClass[i].classList, allClass[i].style);
  }

}

// Add to ID
var allId = document.querySelectorAll("*");

for (var i = allId.length - 1; i>=0; i--){
  
  if (allId[i].id){
    allId[i].style.cssText = "margin: top 10px; background-color: red;";
    console.log(allId[i], allId[i].classList, allId[i].style);
  }

}