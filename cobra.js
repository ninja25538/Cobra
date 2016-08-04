var Msg = document.getElementById("Msg");
function Submit(){
    var a = document.forms["form"]["First_Name"].value;
    var b = document.forms["form"]["Last_Name"].value;
    var c = document.forms["form"]["Username"].value;
    var d = document.forms["form"]["Password"].value;
    if (a == null || a == "" || b == null || b == "" || c == "" || c == null || d == "" || d == null) {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Home");
    }
}
    var x = document.forms["form"]["Email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length){
    Msg.textContent = "INCORRECT EMAIL!"
}
