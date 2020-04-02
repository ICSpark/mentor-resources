var input = document.getElementById("input");
var outputSection = document.getElementById("output-section");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  var pIn = document.createElement("p");
  pIn.className = "dialogueIn";
  pIn.innerHTML = input.value;
  outputSection.appendChild(pIn);

  var pOut = document.createElement("p");
  pOut.className = "dialogueOut";
  if (input.value.includes("Hi")) {
    pOut.innerHTML = "Hi, how are you doing?";
  } else if (input.value.includes("Good thanks!")) {
    pOut.innerHTML = "Great! Bye.";
  } else {
    pOut.innerHTML = "Sorry, I don't understand.";
  }

  window.setTimeout(function() {
    outputSection.appendChild(pOut);
  }, 2000);
});
