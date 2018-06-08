function roboticTranslation(number){
  var roboticWords = ""
  console.log(roboticWords)

  if ((number % 3) === 0 && number != 0) {
    roboticWords = "I’m sorry, Dave. I’m afraid I can’t do that.";
    return roboticWords;
  }

  else if (number === 1) {
    roboticWords = "Boop!";
    return roboticWords;
  }

  else if (number === 0) {
    roboticWords = "Beep!";
    return roboticWords;
    console.log("The number is" + roboticWords)
  }

  else if (Number.isInteger(number)) {
    console.log("Does not meet other rules" + number)
    return number
  }
  else {
    alert("Please enter a number")
  }
  return roboticWords;
}

// console.log(roboticTranslation(0));


$(function() {
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    $("span#outputToUser").text(roboticTranslation(userInput))
  })

})
