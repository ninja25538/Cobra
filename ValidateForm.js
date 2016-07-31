var el = document.getElementById("input_password");
var elMsg = document.getElementById("feedback");
function password(){
 elMsg.innerText = "Not long enough yet...";
}
if (el < 8){
el.addEventListener("focus", password, false);
}
