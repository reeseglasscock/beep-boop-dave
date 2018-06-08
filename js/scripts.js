function roboticSpeakBack(userText){
  $("span#outputToUser").text(userText)
}

function roboticTranslation(number){
  var numberIsZero = ""
  console.log(numberIsZero)
  if (number === 0) {
    numberIsZero = "Beep!"
    return numberIsZero;
    console.log("The number is" + numberIsZero)
  }
  return numberIsZero;

}

console.log(roboticTranslation(0));


$(function() {
  var userText = ""
  $("#robotTalkForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    roboticSpeakBack(roboticTranslation(userInput));
  })

})
