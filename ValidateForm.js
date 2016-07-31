function checkPassword(){
 var password = pass.value;
 if (password.length < 8) {
  passMsg.className = "waring";
  passMsg.textContent = "Not long enough";
 } else {
  passMsg.textContent = " ";
 }
}
function tipPassword(){
 passMssg.className = "tip";
 passMsg.innerHTML = "Password must be at least 8 characters";
}
var pass = document.getElementByClassName("input_password");
var passMsg = document.getElementByClassName("feedback");
pass.addEventListener("focus", checkPassword, false);
pass.addEventListener("blur", tipPassword, false); 
