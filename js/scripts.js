function roboticTranslation(number){

  var roboticDigits = number.split("")

  console.log("This is array of numbers" + roboticDigits)
for (var digit = 0; digit < roboticDigits.length; digit++) {
  var newArray = []
  // console.log("This is the digit" + digit)
  if ((roboticDigits[digit] % 3) === 0 && roboticDigits[digit] != 0) {
    console.log("This is digit" + roboticDigits[digit])
    newArray.push("I’m sorry, Dave. I’m afraid I can’t do that.")
    // console.log("This is the new Array in the push" + newArray)
    // roboticDigits = "I’m sorry, Dave. I’m afraid I can’t do that.";
  }
  else if (roboticDigits[digit] === 1) {
    console.log(roboticDigits[digit])
    newArray.push("Boop!");
    // return newArray;
  }

return newArray
}
// console.log("newArray after looping:" + newArray)



  //
  // else if (number === 0) {
  //   roboticDigits = "Beep!";
  //   return roboticDigits;
  //   console.log("The number is" + roboticDigits)
  // }

  // else if (Number.isInteger(number)) {
  //   console.log("Does not meet other rules" + number)
  //   return number
  // }
  // else {
  //   alert("Please enter a number")
  // }
  // return roboticDigits;
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
