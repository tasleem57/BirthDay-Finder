var userInput = prompt("type your Birthday for check days", "August 01,2017")

var time = new Date(userInput).getTime() - new Date().getTime();
var Minutes = Math.floor(time / (1000 * 60));
var Hours = Math.floor(Minutes / 60);
var Days = Math.floor(Hours / 24);


document.getElementById("input").innerHTML = "Birthday is " + userInput;
document.getElementById("input2").innerHTML = "<br />Days: " + Days + "<br>Hours: " + Hours + "<br>Minutes: " + Minutes;
