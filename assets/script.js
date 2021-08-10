var currentDate = moment().format("MMM Do, YYYY"); 
$("#currentDay").text(currentDate);
console.log(currentDate)

var currentMoment = parseInt(moment().format("H"));
console.log(typeof(currentMoment));

var timeBlocks = document.getElementsByClassName("row")


function compareTime() {
    
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

var saveButton = document.getElementById("button-addon2");

var inputText = document.getElementsByClassName("form-control");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var textDisplaying = {
        textWritten: inputText.value.trim(),
    }

    localStorage.setItem("inputText", "value");

})





