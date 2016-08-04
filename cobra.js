var Msg = document.getElementById("Msg");
function Submit(){
    localStorage.a = document.forms["form"]["First_Name"].value;
    localStorage.b = document.forms["form"]["Last_Name"].value;
    localStorage.c = document.forms["form"]["Username"].value;
    localStorage.d = document.forms["form"]["Password"].value;
    localStorage.l = document.forms["form"]["Email"].value;
    localStorage.month = document.forms["form"]["birthday_month"].value;
    localStorage.day = document.forms["form"]["birthday"].value;
    localStorage.year = document.forms["form"]["birthday_year"].value;

    if (a == null || a == "" || b == null || b == "" || c == "" || c == null || d == "" || d == null || l == null || l == "" || month == "Month" || day == "Day" || year == "Year") {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Home");
      console.log(c);
      console.log(d);
    }
  
}



