var Msg = document.getElementById("Msg");
function Submit(){
    var a = document.forms["form"]["First_Name"].value;
    var b = document.forms["form"]["Last_Name"].value;
    var d = document.forms["form"]["Password"].value;
    if (a == null || a == "" || b == null || b == "") {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Welcome.html");
    }
}
 var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        alert("Sorry, you just got a 404")
    else
        window.location.reload();
}


