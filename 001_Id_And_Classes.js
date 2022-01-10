// #id1
var title = document.getElementById("id1");
title.style.color = "red";

// div.class1
var mainText = document.querySelector(".class1");
mainText.style.cssText = "color: blue; font-size: 14px; text-decoration: underline;";

// Add Class
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

