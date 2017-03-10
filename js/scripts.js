// Anything written after a double-slash (on the same line) is treated as a 'comment' by JavaScript and ignored. Comments are good for annotating your scripts

// First, let us define our button
var my_button = document.getElementById("myButton");

// We should then ask the button to run our function when it is clicked
my_button.addEventListener("click", sayHelloToMe);

// Then we have to make sure that we actually define the function that is called
function sayHelloToMe() {

  // The 'prompt' function appers as a popup, allowing you to collect an input (in this case, the input is stored as a variable called 'person')
  var person = prompt("Please enter your name", "");

  // We then check that the value for 'person' is not null (in case someone refuses to answer) and only perform any action if the condition is false (not equal to)
  // All if/else questions are boolean, meaning that the value of the braket must either equal true of false. In this case, if person is populated, the bracket will equal 'false'
  if(person != null) {
    
    // We can then past a welcome message into our 'messageOutput' paragraph
    document.getElementById("messageOutput").innerHTML = "Hello " + person + "! Welcome to your very first website!";
  }
}
