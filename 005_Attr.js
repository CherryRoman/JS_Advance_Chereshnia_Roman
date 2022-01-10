var targetInAElems = document.querySelectorAll("a[target]");
for (var i = targetInAElems.length - 1; i >= 0; i--) {
targetInAElems[i].style.backgroundColor = "yellow";
}

var targetInA0 = document.querySelector("a[target]");
targetInA0.style.backgroundColor = "red";
