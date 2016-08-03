var user = document.getElementById("input_username");
var pass = document.getElementById("input_password");
var fName = document.getElementById("input_first_name");
var lName = document.getElementById("input_last_name");
var email = document.getElementById("input_email");
var Msg = document.getElementById("feedback");
  var x = document.forms["form"]["input_email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
var userVal = user.value;
var passVal = pass.value;
var fNameVal = fName.value;
var lNameVal = lName.value;
var emailVal = email.value;
function Submit(){
if (userVal.length < 5){
 Msg.textContent = "Username isn't long enough...Please refresh the page";
} else {
 Msg.textContent = "";
}
if (passVal.length < 8){
 Msg.textContent = "Password isn't long enough...Please refresh the page";
} else {
 Msg.textContent = "";
} if (fNameVal == ""){
 Msg.textContent = "You didn't put your first name! Please refresh the page";
} else {
 Msg.textContent = "";
} if (lNameVal == ""){
 Msg.textContent = "You didn't put your last name! Please refresh the page";
} else {
 Msg.textContent = "";
}

if(userVal.length >= 5 && passVal.length >= 8 && fNameVal !== "" && lNameVal !== ""){
 Msg.textContent = "Login Succesful, signing in...";
} else {
  setTimeout(function(){
    location.reload();
  }, 1500);
  
  Msg.textContent = "Please fill out all the information correctly!";
}
}


