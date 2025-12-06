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
        document.querySelector(".sign_in, .sign_up").style.display = "none";
        document.querySelector(".header").style.display = "block";
        document.querySelector(".header").innerHTML = "<h1>Thanks for joining us<h1>";
        if (window.innerWidth < 512) {
            document.querySelector(".header").innerHTML = "<h1>Thanks <br> for <br> joining <br> us<h1>";
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

    



   