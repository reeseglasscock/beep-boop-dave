function roboticTranslation(number){
  var newArray = []
  var roboticDigits = number.split("")
  console.log("This is roboticDigits:" + roboticDigits)
  console.log(number)

  // console.log("This is array of numbers" + roboticDigits)
for (var digit = 0; digit < roboticDigits.length; digit++) {
console.log("This is the index number of robotic digits" + roboticDigits[digit])
  // console.log("This is the digit" + digit)
  if (number % 3 == 0 && number != 0) {
    console.log("This is number" + number)
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

}



  //


  // else if (Number.isInteger(number)) {
  //   console.log("Does not meet other rules" + number)
  //   return number
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
