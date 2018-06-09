//Business Logic
function roboticTranslation(number){
  var newArray = []
  var roboticDigits = number.split("")
  // console.log(number)
  for (var digit = 0; digit < roboticDigits.length; digit++) {
    if (number % 3 == 0 && number != 0) {
      newArray.push("I'm sorry, Dave. I’m afraid I can’t do that.")
      break
    }
    else if (roboticDigits[digit] == 1) {
      newArray.push("Boop!");
      break
    }
    else if (roboticDigits[digit] == 0) {
      newArray.push("Beep!")
      break
    }
    else if (roboticDigits[digit] != 0 || roboticDigits[digit] != 1){
      newArray.push(number + ".")
      break
    }
    else if (isNaN(number)){
      alert("Please enter a number")
    }
  }
  return newArray
}

function stringCreatorForNumbers(number){
  var integerWholeNumber = Number(number)
  var integerArray = []
  if (isNaN(number) == true || number=="") {
    alert("Please enter a number")
  }
  else if (isNaN(number) == false) {
    for (number = 0; number <= integerWholeNumber; number++){
      integerArray.push(roboticTranslation(number.toString()))
    }
  }
  return integerArray
}

//User Interface
$(function() {
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#outputToUser").text(stringCreatorForNumbers(userInput).join(" "))
  })
})
