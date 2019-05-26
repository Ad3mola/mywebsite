function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user == "Ademola" && pass == "dr123"){
        alert("Logged In");
        locate = "productPage.html"
        document.querySelector(".store").textContent = user;
        return false;
    } else {
        alert("Wrong user");
        return false;
    }
}



document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    login();
})