var Msg = document.getElementById("Msg");
function Submit(){
    var x = document.forms["form"]["First_Name"].value;
    if (x == null || x == "") {
        Msg.textContent = "Please fill out all the information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Welcome.html");
    }
}


