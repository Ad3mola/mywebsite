
    
function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var usernames = ["Ademola", "Tunde", "Biodun"];
    var password = ["user1", "user2", "user3"];
    var index = 0;
    for(var i = 0; i < usernames.length ; i++ ){
        if(user == usernames[i] && pass == password[i]){
            window.location = "productPage.html";
            index = i;
    } else{
        document.querySelector("p").textContent = "invalid login credentials";
        var user = document.getElementById("username").value = "";
        var pass = document.getElementById("password").value = "";
        var user = document.getElementById("username").focus();
    }
    }
    localStorage.setItem('user', usernames[index] );
        }
    var click = document.getElementById("submit").addEventListener("click", login);

    

  /*  const users = [
        { username : "Ademola", password : "user1"},
        { username : "Tunde", password : "user2"},
        { username : "yemi", password : "user3"},
        { username : "Biodun", password : "user4"},
        { username : "shola", password : "user5"}
    ];

    function login(){
        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        users.forEach(function(Uname){
            if (user === Uname.username && pass === Uname.password){
                    localStorage.setItem('user', Uname.username);
                    window.location = "productPage.html";
            } else{
                document.querySelector("p").textContent = "invalid login";
                var user = document.getElementById("username").value = "";
                var pass = document.getElementById("password").value = "";
                var user = document.getElementById("username").focus();
            }
            
    })
}
var click = document.getElementById("submit").addEventListener("click", login);
*/


