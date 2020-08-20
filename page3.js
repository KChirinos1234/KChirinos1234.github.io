var submit_mistake = function () {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var reason = document.getElementById("reason");

  if (name.value == "") {
    alert("Please fill out your name");
  } else if (email.value == "") {
    alert("Please fill out your email");
  } else if (reason.value == "") {
    alert("Please fill out your reason");
  } else {
    alert("Thanks for your submission! Unfortunately, I couldn't figure out how to send an email to myself through just using the three languages used in this site but given more time and knowledge of backend coding, I'll be able to do this soon!")
  }
}