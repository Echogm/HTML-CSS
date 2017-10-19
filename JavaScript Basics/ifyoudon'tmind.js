var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (MINUTE >= 30) {
    console.log("It's almost",HOUR,"in the morning.");
}
else {
    console.log("It's just after",HOUR,"in the evening.");
}
