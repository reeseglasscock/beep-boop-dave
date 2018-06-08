function roboticTranslation(number){
  var newArray = []
  var roboticDigits = number.split("")

for (var digit = 0; digit < roboticDigits.length; digit++) {
  if (number % 3 == 0 && number != 0) {
    newArray.push("I’m sorry, Dave. I’m afraid I can’t do that.")
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
  else {
    newArray.push(number)
    break
  }
}

  // else if (Number.isInteger(parseInt($(number)))) {
  //   console.log("Does not meet other rules" + number)
  // }

  // else {
  //   alert("Please enter a number")
  // }
  // return roboticDigits;
  return newArray
}

// console.log(roboticTranslation(0));


$(function() {
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    roboticTranslation(userInput)
    // console.log("this is user input" + userInput)
    $("span#outputToUser").text(roboticTranslation(userInput))

    // roboticTranslation(userInput)
  })

})
