


function popUp(text) {
    let popUp = document.querySelector(".window");
    if (text === 'flashcards') {
        popUp.innerHTML = "<button id='close'>&times;</button>" + "<h2>Flashcards</h2>" + "<p>I used HTML, JS and CSS</p>";
    } else if (text === 'piano') {
        popUp.innerHTML = "<button id='close'>&times;</button>" + "<h2>Virtual Piano</h2>" + "<p>I used HTML, CSS and JS to use audio</p>";
    }
    document.querySelector(".window").style.display = "block";
    document.querySelector("#close").addEventListener("click", function(){
        document.querySelector(".window").style.display = "none";
    });
}

function displayList() {
    let list = document.querySelector('.hamburger');
    if (list.style.display === "flex") {
        list.style.display = "none";
    } else {
        list.style.display = "flex";
    }
}