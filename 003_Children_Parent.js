// p
var lastText = document.querySelectorAll("p");
  for (var i = lastText.length - 1; i>=0; i--){
    lastText[i].style.color = "brown";    
  }

  // div p a span
var spanInLink = document.querySelector("div > p > a > span");
spanInLink.style.color = "red";

// div > span
var spanInDiv = document.querySelector("div > span");
spanInDiv.style.color = "green";

// Add class
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