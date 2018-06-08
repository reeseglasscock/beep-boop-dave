function roboticSpeakBack(userText){
  $("span#outputToUser").text(userText)
}

function roboticTranslation(number){
  var roboticSentence = []
  if (number === 0) {
    roboticSentence = "Beep!";
    return roboticSentence;
    console.log("The number is" + roboticSentence)
  }
  else if (number === 1) {
    roboticSentence = "Boop!";
    return roboticSentence;
  }
  else if ((number % 3) === 0) {
    roboticSentence = "I’m sorry, Dave. I’m afraid I can’t do that.";
    return roboticSentence;
  }
  else if (Number.isInteger(number)) {
    console.log("Does not meet other rules" + number)
    return number
  }
  else {
    alert("Please enter a number")
  }
  return roboticSentence;

}

// console.log(roboticTranslation(0));


$(function() {
  var userText = ""
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    roboticSpeakBack(roboticTranslation(userInput));
  })

})
