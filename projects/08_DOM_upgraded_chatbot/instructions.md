# Upgraded Chatty Chatbot

Create a better chatbot using HTML, CSS, and JS.

## Objective
Use what you have learned (If statements, functions, DOM...etc.) to create a simple chatbot that users can interact with.

## Your Challenge
1. Create a folder called "upgraded-chatbot".
2. Open the folder in Atom and create the following files:
  * index.html
  * styles.css
  * app.js
3. In your index.html file, initialize the file using the shortcut ```!```, then press tab. You should get something like the following.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

4. Link your CSS and JS files as follows.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="styles.css">
  <title>Document</title>
</head>
<body>

  <script src="app.js"></script>
</body>
</html>
```

## Part I: HTML
1. In your HTML file, create the following with the correct nested indented structure below. (The input, button, and p should be nested inside of the div):
  * ```div``` with an id of "container"
    * ```div``` with an id of "input-section"
      * ```input``` with an id of "input"
      * ```button``` with an id of "button" and text of "Chat"
    * ```div``` with an id of "output-section" (no text inside)

## Part II: CSS
1. Target the ```body``` element
  * Set the ```margin``` to ```0px```
  * Set the ```background-color``` to a color of your choice
2. Target the ```div``` with an id of "input-section"
  * Activate flexbox! HINT: Use ```display```
  * Use flexbox to change the direction of items to column
  * Use flexbox to center items vertically
  * Set the ```margin-top``` to ```100px```
3. Target the ```input``` with an id of "input"
  * Set the ```width``` to ```500px```
  * Set the ```height``` to ```50px```
  * Set the ```font-size``` to ```30px```
4. Target the ```button``` with an id of "button"
  * Set the ```font-size``` to ```30px```
  * Set the ```padding``` to ```10px```
  * Set the ```margin-top``` to ```20px```
5. Target the ```div``` with an id of "output-section"
  * Set the ```font-size``` to ```30px```
  * Activate flexbox!
  * Use flexbox to change the direction of items to column
  * Use flexbox to center items vertically
6. Target the class of "dialogueIn" (we will create this class in JS later)
  * Set the ```background-color``` to ```white```
  * Set the ```border-radius``` to ```10%```
  * Set the ```padding``` to ```10px```
7. Target the class of "dialogueOut" (we will create this class in JS later)
  * Set the ```background-color``` to ```grey```
  * Set the ```border-radius``` to ```10%```
  * Set the ```padding``` to ```10px```

## Part III: JS
1. Store the ```input```, ```button```, and ```div``` with an id of "output-section" element in variables using the DOM method ```document.getElementById(elementId)```. An example is shown below:

``` javascript
var yourVariableName = document.getElementById("yourElementId");
```

2. Add an ```EventListener``` to the button that will listen for a "click event". This can be done using the pattern below:

``` javascript
button.addEventListener("click", function(){

});
```

3. When the button is clicked, we want to create a ```p``` element and store it in a variable called "pIn". Look at the example below and modify it to create the ```p``` element:

``` javascript
// Creates a new heading element
var newHeading = document.createElement("h1");
```

4. Give your new ```p``` element a class name of "dialogueIn" by doing the following:

``` javascript
pIn.className = "dialogueIn";
```

5. Set the ```innerHTML``` of the newly created ```p``` element to ```input.value```.
6. Append the newly created p element to the output section. Look at the example below and modify it to append it to your output section:

``` javascript
element.appendChild(newElement);
```

7. Create a variable called "pOut" that will store another newly created ```p``` element.
8. Give this new ```p``` element a class name of "dialogueOut".
9. Create an if statement to check what the user has typed (```input.value```). Create an ```if statement``` that checks if the user says "Hi". For a review of if statements, look at: https://www.w3schools.com/js/js_if_else.asp.
  * If the user says "Hi", change the ```innerHTML``` of your newly created ```p``` element to respond with "Hi, how are you doing?" (or text of your choice)
  * Else if the user says "Good", change the ```innerHTML``` of your newly created ```p``` element to respond with "Great! Bye!" (or text of your choice)
  * Else, change the ```innerHTML``` of your of your newly created ```p``` element to respond with "Sorry! I don't understand." (or text of your choice)
10. Create a delay before we append the pOut to the output section by using ```setTimeout``` (Resource: https://www.w3schools.com/js/js_timing.asp). Look at the example below and modify it to append the pOut dialogue to the output section:

``` javascript
// The console will print "Hi" after 2000 milliseconds (2 seconds).
window.setTimeout(function() {
  console.log("Hi");
}, 2000);
```

11. Do you notice how limited your chatbot is? If the user types in "HI" with all capitals, or "Hi whats up?", the chatbot response will be "Sorry! I don't understand." How can we modify our code to understand and respond to more possible input values? Here are some ideas:
  * Convert the ```input.value``` string to uppercase letters - Resource: https://www.w3schools.com/jsref/jsref_touppercase.asp  
  * Use the logical operator ```||``` (OR) to accept multiple values (e.g. if the ```input.value``` is "Hi" OR "Hey" OR "Yo", then respond with "Hi, how are you doing?") - Resource: https://www.w3schools.com/js/js_comparisons.asp
  * Allow values that *include* "Hi" or "Hey"..etc. to be accepted (so that values like "Hi whats up?") can be responded to appropriately - Resource: https://www.w3schools.com/jsref/jsref_includes.asp
  * Create an array of related responses (e.g. an array for greetings, questions...etc.), and check if the ```input.value``` includes any of the array elements, then output the appropriate response - Resource: Think about how you could do this using String - https://www.w3schools.com/js/js_string_methods.asp or Array methods - https://www.w3schools.com/js/js_array_methods.asp

## Stretch Goal

1. Create an array of related, but different responses (Hi, hello, yo, hey there...etc.). Randomize the chatbot response to the same types of input so that the chatbot appears more human.
