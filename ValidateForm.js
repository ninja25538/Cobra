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
 Msg.textContent = "Username isn't long enough...";
} else {
 Msg.textContent = "";
}
if (passVal.length < 8){
 Msg.textContent = "Password isn't long enough...";
} else {
 Msg.textContent = "";
} if (fNameVal == ""){
 Msg.textContent = "You didn't put your first name!";
} else {
 Msg.textContent = "";
} if (lNameVal == ""){
 Msg.textContent = "You didn't put your last name!";
} else {
 Msg.textContent = "";
}
 if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        Msg.textContent = "You didn't type a valid email address!";
        return false;
    } else {
     Msg.textContent = "";
    }

}
