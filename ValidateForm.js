var el = document.getElementById("input_password");
var elMsg = document.getElementById("feedback");
function password(){
 if (el < 8){
 elMsg.innerText = "Password must be at least 8 characters";
}
}
function usure(){
   if (el < 8) {
  elMsg.innerText = "Not long enough..."
   }
}
el.addEventListener("focus", password, false);
el.addEventListener("blur", usure, false)

