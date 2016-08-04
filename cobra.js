var Msg = document.getElementById("Msg");
function Submit(){
    localStorage.a = document.forms["form"]["First_Name"].value;
    localStorage.b = document.forms["form"]["Last_Name"].value;
    localStorage.c = document.forms["form"]["Username"].value;
    localStorage.d = document.forms["form"]["Password"].value;
    localStorage.x = document.forms["form"]["Email"].value;
    localStorage.month = document.forms["form"]["birthday_month"].value;
    localStorage.day = document.forms["form"]["birthday"].value;
    localStorage.year = document.forms["form"]["birthday_year"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (a == null || a == "" || b == null || b == "" || c == "" || c == null || d == "" || d == null || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || month == "Month" || day == "Day" || year == "Year") {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Home");
    }
    
}


