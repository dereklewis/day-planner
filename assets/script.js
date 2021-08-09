var currentDate = moment().format("MMM Do, YYYY"); 
$("#currentDay").text(currentDate);
console.log(currentDate)

var currentMoment = moment().format("H");


var fourPm = document.getElementById("four-pm");
var threePm = document.getElementById("three-pm");

var allTimeblocks = ["fivePm", "fourPm", "threePm"]

if (fivePm < currentMoment) {
    .setAttribute("class", "past");
}



function pastPresentFuture() {

    for(i=0;i < allTimeblocks.length; i++) {
        if (allTimeblocks[0] < currentMoment) {
            allTimeblocks.setAttribute("class", "past");
        }
        // else if (allTimeblocks = currentMoment) {
        //      allTimeblocks.setAttribute("class", "present");
        // }
        // else {
        //      allTimeblocks.setAttribute("class", "future");
        // }
    }
    pastPresentFuture()
}




// function calendarTimes() {

if(currentMoment > fourPm) {
   var element = document.getElementById("fourPm");
   fourPm.classList.toggle("past");
}
else if (currentMoment === fourPm) {
    
   fourPm.classList.toggle("present");
}
else {
    
   fourPm.classList.toggle("future");
}

// }
// calendarTimes()
//create blocks of time that change color based on the current time and can be written into and saved in local storage