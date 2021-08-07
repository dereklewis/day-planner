var currentDate = moment().format("MMM Do, YYYY"); 
$("#currentDay").text(currentDate);
console.log(currentDate)

var currentMoment = moment().format("H");
var nineAm = 9
var tenAm = 10
var elevenAm = 11
var noon = 12
var onePm = 13
var twoPm = 14
var threePm = 15
var fourPm = 16
var fivePm = 17

var calenarTimes = []
console.log(currentMoment)
if(currentMoment > nineAm) {
    console.log("It's past")
}
else {
    console.log("It's wrong")
}
//create blocks of time that change color based on the current time and can be written into and saved in local storage