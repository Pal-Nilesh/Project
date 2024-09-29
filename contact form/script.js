var nameerror = document.getElementById("name-error");
var phoneerror = document.getElementById("number-error");
var emailerror = document.getElementById("email-error");
var msgerror = document.getElementById("msg-error");
var submiterror = document.getElementById("submit-error");

function validatename() {
  var name = document.getElementById("name").value;

  if (name.length == 0) {
    nameerror.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameerror.innerHTML = "Write Full Name";
    return false;
  }
  nameerror.innerHTML = "<img src='./tick.png' alt='tick' height='20' />";
  return true;
}

function validatephone() {
  var phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    phoneerror.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneerror.innerHTML = "Phone no should be 10 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phone.innerHTML = "Phone no is required";
    return false;
  }
  phoneerror.innerHTML = "<img src='./tick.png' alt='tick' height='20' />";
  return true;
}

function validateemail() {
  var email = document.getElementById("mail").value;
  if (email.length == 0) {
    emailerror.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailerror.innerHTML = "Email Invalid";
    return false;
  }
  emailerror.innerHTML = "<img src='./tick.png' alt='tick' height='20' />";
  return true;
}

function validatemsg() {
  var massage = document.getElementById("message").value;
  var required = 30;
  var left = required - massage.length;
  if (left > 0) {
    msgerror.innerHTML = left + " more characters required";
    return false;
  }
  msgerror.innerHTML = "<img src='./tick.png' alt='tick' height='20' />";
  return true;
}

function validateform() {
  if (
    !validatename() ||
    !validatephone() ||
    !validateemail() ||
    !validatemsg()
  ) {
    submiterror.style.display = "block";
    submiterror.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submiterror.style.display = "none";
    }, 3000);
    return false;
  }
}
