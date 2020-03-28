var input = document.getElementById("input");
var output = document.getElementById("output");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  if (input.value === "Hi") {
    output.innerHTML = "Hi, how are you doing?";
  } else if (input.value === "Good") {
    output.innerHTML = "Great! Bye.";
  } else {
    output.innerHTML = "Sorry, I don't understand.";
  }
})
