//Business Logic

function roboticTranslation(number){
  var newArray = []
  var roboticDigits = number.split("")

  for (var digit = 0; digit < roboticDigits.length; digit++) {
    if (number % 3 == 0 && number != 0) {
      newArray.push("I’m sorry, Dave. I’m afraid I can’t do that.")
    }
    else if (roboticDigits[digit] == 1) {
      newArray.push("Boop!");
    }
    else if (roboticDigits[digit] == 0) {
      newArray.push("Beep!")
    }
    else {
      newArray.push(number)
    }
  }
  return newArray
}

function stringCreatorForNumbers(number){
  var integerWholeNumber = Number(number)
  var integerArray = []
  for (number = 0; number <= integerWholeNumber; number++){
    integerArray.push(roboticTranslation(number.toString()))
  }
  return integerArray
}

//User Interface
$(function() {
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    stringCreatorForNumbers(userInput)
    $("span#outputToUser").text(stringCreatorForNumbers(userInput).join(" "))
  })
})
