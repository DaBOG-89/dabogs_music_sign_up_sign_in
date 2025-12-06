    
function signUp() {
    document.querySelector(".sign_up").style.display = "block";
    document.querySelector(".header").style.display = "none";
}

function signIn() {
    document.querySelector(".sign_in").style.display = "block";
    document.querySelector(".header").style.display = "none";
}

function signedUp() {
    document.querySelector(".sign_in").style.display = "block";
    document.querySelector(".sign_up").style.display = "none";
    document.querySelector(".header").style.display = "none";
} 

function signedIn() {
    let username = document.querySelector("#username").value.toUpperCase();
    let password = document.querySelector("#password").value.toUpperCase();
    let user = "DABOG";
    let pass = "DABOG";
    if (username === user && password === pass) {
        document.querySelector(".sign_in").style.display = "none";
        document.querySelector(".sign_up").style.display = "none";

        let header = document.querySelector(".header");
        header.style.display = "block";

        if (window.innerWidth < 512) {
            header.innerHTML = "<h1>Thanks <br> for <br> joining <br> us</h1>";
        } else {
            header.innerHTML = "<h1>Thanks for joining us</h1>";
        }
    } else {
        document.querySelector(".sign_in").style.display = "none";
        document.querySelector(".sign_up").style.display = "none";
        let header = document.querySelector(".header");
        header.style.display = "block";
        if (window.innerWidth < 512) {
            header.innerHTML = "<h1>Invalid <br> username <br> or <br> password!</h1>";
        } else {
            header.innerHTML = "<h1>Invalid username or password!</h1>";
        }
    }
}

let num = -1;
function increase () {
    num++;
    if (num > 9) {
        num = 0;
    }
    
    document.querySelector("body").style.backgroundImage = 'url("pictures_1/' + num + '.jpg")';
    setTimeout(increase, 10000);
}
increase();
