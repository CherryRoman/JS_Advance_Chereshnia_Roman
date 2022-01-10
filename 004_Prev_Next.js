var pInDiv = document.querySelector("div + p");
pInDiv.style.backgroundColor= "yellow";

var ulInP0 = document.querySelectorAll("p ~ ul");
for (var n = ulInP0.length - 1; n >= 0; n--) {
ulInP0[n].style.background = "#ff0000";
}

