var i = 2;
var n = 0;

function addItem() {  
  var newItem = document.createElement("li");    
  newItem.innerHTML = "Line Item" + " : " + i;    
  newItem.id = "myLI";
  document.getElementById("myUL").appendChild(newItem);
  console.log(newItem);
  i++;
};

function toTopItem(form) {
  var mainObj = document.getElementById("myUL");
  var newItem = document.createElement("li");
  newItem.innerHTML = "Line Item" + " : " + n;    
  newItem.id = "myLI";
  mainObj.insertBefore(newItem, mainObj.firstChild);
  n--;
};

function deleteItem(form) {
  var mainObj = document.getElementById("myUL");   
  var oneChild = mainObj.lastChild;
  mainObj.removeChild(mainObj.lastChild);    
  i--;  
};

function firstItem(form) {
  var mainObj = document.getElementById("myUL");
  mainObj.firstChild.style.color = 'orange';
  var mainObj = document.getElementById("myUL");
  mainObj.lastChild.style.color = 'black';
  mainObj.firstChild.id = "myLI" + "Color";
};

function lastItem(form) {
  var mainObj = document.getElementById("myUL");
  mainObj.lastChild.style.color = 'orange';
  var mainObj = document.getElementById("myUL");
  mainObj.firstChild.style.color = 'black';
  mainObj.lastChild.id = "myLI" + "Color";
};

function nextItem(form) { 
  mainObjLI = document.getElementById("myLIColor");

  if (mainObjLI == null) {
    firstItem(form);
  } else if (mainObjLI !== null) {
    mainObjLI.id = "myLI";
    mainObjLI.style.color = 'black';
    console.log(mainObjLI);
    mainObjLI = mainObjLI.nextSibling;
    mainObjLI.id = "myLI" + "Color";
    mainObjLI.style.color = 'orange';
    console.log(mainObjLI);
  } 
};

function previousItem(form) {
  mainObjLI = document.getElementById("myLIColor");

  if (mainObjLI == null) {
    lastItem(form);
  } else if (mainObjLI !== null) {
    mainObjLI.id = "myLI"; 
    mainObjLI.style.color = 'black';
    console.log(mainObjLI);
    mainObjLI = mainObjLI.previousSibling;
    mainObjLI.id = "myLI" + "Color"; 
    mainObjLI.style.color = 'orange';
    console.log(mainObjLI);
  }  
};