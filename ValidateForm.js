var el = document.getElementById("input_password");
var elMsg = document.getElementById("feedback");
function password(){
 el.innerText = "Not long enough yet...";
}
el.addEventListener("focus", tipPassword, false);
