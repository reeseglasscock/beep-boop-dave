// function stringCreatorForNumbers(number){
//
//
//
//   console.log(number)
//   console.log(integerWholeNumber)
//   console.log(integerArray)
// }

function roboticTranslation(number){
  var integerWholeNumber = Number(number)
  var integerArray = []
  var newArray = []
  console.log(newArray)
  var roboticDigits = number.split("")
  console.log(roboticDigits)
// console.log(newArray)
  for (numberSpot = 0; numberSpot <= integerWholeNumber; numberSpot++){
    integerArray.push(newArray)
    console.log(numberSpot)
    for (digit = 0; digit < roboticDigits.length; digit++) {
      console.log("This is digit" + digit)
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
        // console.log("reached 0")
        // console.log(roboticDigits[digit])
        break
      }
      else {
        newArray.push(number)
        break
      }

    }

    // return newArray
  }

console.log("This is integerArray" + integerArray)
// return newArray
// console.log(newArray)
}



$(function() {
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    // stringCreatorForNumbers(userInput)
    $("span#outputToUser").text(roboticTranslation(userInput))
  })
})
