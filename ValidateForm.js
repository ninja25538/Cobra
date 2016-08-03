function Submit(){
    var x = document.forms["form"]["input_username"]["input_password"]["input_first_name"]["input_last_name"]["input_email"].value;
    if (x == null || x == "") {
        Msg.textContent = "Please fill out all the information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Welcome.html");
    }
}


