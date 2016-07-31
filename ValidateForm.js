var el = document.getElementById("input_password");
var elMsg = document.getElementById("feedback");
function checkPassword() {
 var pasword = el.value;
 if (password.length >= 8) {
  elMsg.textContent = "Not long enough...";
 } else { 
  elMsg.textContent = " ";
 }
}
function tipPassword() {
 elMsg.innerHtml = "Username must be at least 8 characters";
}

el.addEventListener("focus", tipPassword, false);
el.addEventListener("blur", checkPassword, false);
