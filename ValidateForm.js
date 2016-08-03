function Submit(){
    var x = document.forms["form"]["username"]["Password"]["First Name"]["Last Name"]["Email"].value;
    if (x == null || x == "") {
        Msg.textContent = "Please fill out all the information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Welcome.html");
    }
}


