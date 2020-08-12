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
    alert("Thanks for your submission! Unfortunately, I'm not sure how to take your submissions yet!")
  }
}