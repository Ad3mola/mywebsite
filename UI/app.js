
function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var index = 0;
    var usernames = ["Ademola", "Tunde", "Biodun"];
    var password = ["user1", "user2", "user3"];
    for(var i = 0; i < usernames.length ; i++ ){
        if((user == usernames[i]) && (pass == password[i])){
            window.location = "productPage.html";
            index = i;
    } else{
        document.querySelector("p").textContent = "invalid login";
        var user = document.getElementById("username").value = "";
        var pass = document.getElementById("password").value = "";
        var user = document.getElementById("username").focus();
    }
    }
        }
    var click = document.getElementById("submit").addEventListener("click", login);
