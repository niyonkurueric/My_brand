const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    const logout = JSON.parse(localStorage.getItem("userInfo"));
    logout.islogin = false;
    localStorage.setItem("userInfo", JSON.stringify(logout));
    window.location.replace("http://127.0.0.1:5500/login/login.html");
})


const logout1 = document.getElementById("logout1");
logout1.addEventListener("click", () => {
    const logout = JSON.parse(localStorage.getItem("userInfo"));
    logout1.islogin = false;
    localStorage.setItem("userInfo", JSON.stringify(logout1));
    window.location.replace("http://127.0.0.1:5500/login/login.html");
})