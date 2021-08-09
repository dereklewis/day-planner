var currentDate = moment().format("MMM Do, YYYY"); 
$("#currentDay").text(currentDate);
console.log(currentDate)

var currentMoment = parseInt(moment().format("H"));
console.log(typeof(currentMoment));

var timeBlocks = document.getElementsByClassName("row")


function compareTime() {
    currentMoment = 12
    for (i = 0; i < timeBlocks.length; i++) {
        var timeChange = timeBlocks[i] 
        var timeId = parseInt(timeChange.getAttribute("id"))
       console.log(timeId);
       console.log(currentMoment);
      if (timeId < currentMoment) {
          timeChange.classList.add("past");
      }  
      else if (timeId === currentMoment) {
          timeChange.classList.add("present");
      }
      else {
          timeChange.classList.add("future");
      }
        
    }

}
compareTime()






