
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i=0; i < names.length; i++) {

    var firstLetterResult = names[i].charAt(0) == "J" || names[i].charAt(0) == "j";

    if (firstLetterResult) {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

}) ();
