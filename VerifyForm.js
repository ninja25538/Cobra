localStorage.setItem("users", []);
function User(first_name, last_name, username, password, email, birthday_month, birthday, birthday_year){
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.birthday_month = birthday_month;
    this.birhday = birthday;
    this.birthday_year = birthday_year;
}
var Msg = document.getElementById("Msg");
function Submit(){
    var a = document.forms["form"]["First_Name"].value;
    var b = document.forms["form"]["Last_Name"].value;
    var c = document.forms["form"]["Username"].value;
    var d = document.forms["form"]["Password"].value;
    var l = document.forms["form"]["Email"].value;
    var month = document.forms["form"]["birthday_month"].value;
    var day = document.forms["form"]["birthday"].value;
    var year = document.forms["form"]["birthday_year"].value;
    localStorage.setItem("fn", a);
    
    var ln = localStorage.b;
    var u = localStorage.c;
    var p = localStorage.d;
    var e = localStorage.l;
    var m = localStorage.month;
    var d = localStorage.day;
    var y = localStorage.year;
    

    if (ln == null || ln == "" || u == "" || u == null || p == "" || p == null || e == null || e == "" || m == "Month" || d == "Day" || y == "Year") {
        Msg.textContent = "Please fill out all information correctly!";
        return false;
    } else {
      var account = new User(ln, u, p, e, m, d, y);
       var wha = localStorage.getItem("fn");
       var use = localStorage.getItem("users")
      use.push(wha);
      Msg.textContent = "Registration succesful!"
      console.log(use);
    }
  
}


