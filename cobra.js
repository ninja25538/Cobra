var Msg = document.getElementById("Msg");
function Submit(){
    var a = document.forms["form"]["First_Name"].value;
    var b = document.forms["form"]["Last_Name"].value;
    var c = document.forms["form"]["Username"].value;
    var d = document.forms["form"]["Password"].value;
    var x = document.forms["form"]["Email"].value;
    var month = document.forms["form"]["birthday_month"].value;
    var day = document.forms["form"]["birthday"].value;
    var year = document.forms["form"]["birthday_year"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (a == null || a == "" || b == null || b == "" || c == "" || c == null || d == "" || d == null || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || month =="Month" || birthday == "Day" || year == "Year") {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      Msg.textContent = "Registration succesful!"
      window.location.replace("Home");
    }

