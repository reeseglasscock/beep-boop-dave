// function stringCreatorForNumbers(number){
//
//
//
//   console.log(number)
//   console.log(integerWholeNumber)
//   console.log(integerArray)
// }

// console.log(newArray)

function roboticTranslation(number){
  var integerWholeNumber = Number(number)

  // console.log("Integer array is:" + integerArray);

  var roboticDigits = number.split("")
  // console.log(roboticDigits)
// console.log(newArray)
  for (numberSpot = 0; numberSpot <= integerWholeNumber; numberSpot++){
      var integerArray = []
      var newArray = []
      // integerArray.concat(newArray)

      console.log(numberSpot)

    // for (digit = 0; digit < roboticDigits.length; digit++) {

      // console.log(newArray)
      if (numberSpot % 3 == 0 && numberSpot != 0) {
        newArray.push("I’m sorry, Dave. I’m afraid I can’t do that.")
        integerArray.concat(newArray)
        console.log(integerArray);
        // break
      }
      else if (numberSpot == 1) {
        newArray.push("Boop!");
        integerArray.concat(newArray)
        // break
      }
      else if (numberSpot == 0) {
        newArray.push("Beep!")
        integerArray.concat(newArray)
        // console.log("reached 0")
        // console.log(roboticDigits[digit])
        // break
      }
      else {
        newArray.push(number)
        // break
      }



// integerArray.slice(newArray)
    // }
    // integerArray.slice(newArray)
    // return newArray
  }

// console.log("This is integerArray" + integerArray)
return newArray
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
