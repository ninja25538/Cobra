var el = document.getElementById("input_password");
var elMsg = document.getElementById("feedback");
function password(){
 el.innerHTML = "Not long enough yet...";
}
el.addEventListener("focus", password, false);
