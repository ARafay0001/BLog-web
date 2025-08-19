const loginButn = document.getElementById("login");
const signupButn = document.getElementById("signup");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButn = document.getElementsByClassName("submit")[0]
const error = document.getElementById("error");

let mode = "login";

signupButn.addEventListener('click', () => {
    mode = "signup";
    emailInput.value = ""
    passwordInput.value = ""
    error.innerHTML = `"Already have an account? click to login"`
    loginButn.classList.remove("active");
    error.innerHTML = `"Already have an account? click to login"`
    signupButn.classList.add("active");
    submitButn.innerHTML = "SignUp"
    document.getElementById("slider").classList.add("slideRight")
})

loginButn.addEventListener('click',() => {
    mode = "login";
    emailInput.value = ""
    passwordInput.value = ""
    error.innerHTML = `"Dont have account? click to signup"`
    loginButn.classList.add("active");
    error.innerHTML = `"Dont have an account? click to signup"`
    signupButn.classList.remove("active");
    submitButn.innerHTML = "Login"
    document.getElementById("slider").classList.remove("slideRight")
})



submitButn.addEventListener("click", () => {
    if (mode === "signup") { 
        if (emailInput.value.trim() == "" || passwordInput. value.trim() == "") 
        {
            error.innerHTML = "❌ Enter eamil & password before sign up"
        } else if (localStorage.getItem(emailInput.value)) {
            error.innerHTML = "✔️ Email is already registered"
            mode = "login";
                loginButn.classList.add("active");
                signupButn.classList.remove("active");
                submitButn.innerHTML = "Login";
                document.getElementById("slider").classList.remove("slideRight");
                emailInput.value = "";
                passwordInput.value = "";
                return
                
            } else {
                localStorage.setItem(emailInput.value, JSON.stringify({userEmail: emailInput.value, userPassword: passwordInput.value}))
                error.innerHTML = "✔️ Account craeted Sucessfully";
                mode = "login";
                loginButn.classList.add("active");
                signupButn.classList.remove("active");
                submitButn.innerHTML = "Login";
                document.getElementById("slider").classList.remove("slideRight");
                emailInput.value = ""
                passwordInput.value = ""
                return
        };
    }  

    if (mode === "login") {
        const loginUser = JSON.parse(localStorage.getItem(emailInput.value)) || []
        
        if (emailInput.value.trim() == "" || passwordInput. value.trim() == "") 
        {
            error.innerHTML = "❌ Enter email & password before login"
        } else {
            if (loginUser.userEmail == emailInput.value && loginUser.userPassword == passwordInput.value) {

                error.innerHTML = "✔️ Account Login Sucessfully"
                window.location.href = "home.html"
                localStorage.setItem("loggedInUser", JSON.stringify({email: emailInput.value}));
                
            } else {
            error.innerHTML = "❌ Wrong email or password"
        }
            
        }

    }
})

