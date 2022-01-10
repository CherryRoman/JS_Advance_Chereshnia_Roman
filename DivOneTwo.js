function AddFunction(){
  var divTwo = document.getElementById("one");
  divTwo.insertAdjacentHTML("beforeEnd", "<div>two</div>");
  var next = document.getElementsByTagName("div")[1];
  next.id = "two";
  // console.log(divTwo, next);
  var display = document.querySelectorAll("div");
  for (var i = 0; i < display.length; i++) {
    console.log(display[i])
  }

  var mySelect = document.getElementById("two");
  
  mySelect.onclick = function(){
    var divOne = document.getElementsByTagName("div")[1];
    divOne.insertAdjacentHTML("beforeBegin", "<div>two_first</div>");

    var next = document.getElementsByTagName("div")[1];
    next.id = "two_first";
    
    var next = document.getElementsByTagName("div")[2];
    next.id = "two_second";
    next.innerHTML = "two_second";

    var display = document.querySelectorAll("div");
    for (var i = 0; i < display.length; i++) {
    console.log(display[i])
    }

  }

}


