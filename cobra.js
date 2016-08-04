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
    var fn = localStorage.a;
    var ln = localStorage.b;
    var u = localStorage.c;
    var p = localStorage.d;
    var e = localStorage.l;
    var m = localStorage.month;
    var d = localStorage.day;
    var y = localStorage.year;
    

    if (fn == null || fn == "" || ln == null || ln == "" || u == "" || u == null || p == "" || p == null || e == null || e == "" || m == "Month" || d == "Day" || y == "Year") {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Home");
      console.log(u);
      console.log(p);
    }
  
}



