window.onload = function(){
    var sections = document.getElementsByClassName("content");
    for (let i = 0; i<sections.length; i++){
        sections[i].style.display = "none";
        sections[i].style.height = "0%";
    }
    document.getElementById(`home-page`).style.display = "block";
    document.getElementById(`home-page`).style.height = "100%";
    document.getElementById('home-nav').classList.add("on-page")
}

function displayContent(event) {
    var btn = event.target;
    var btnText = btn.innerText
    var btns = document.getElementsByClassName("nav")
    var id = btnText.replace(/\s+/g, '-').toLowerCase();
    var sections = document.getElementsByClassName("content");
    for (let i = 0; i<sections.length; i++){
        sections[i].style.display = "none";
        sections[i].style.height = "0%";
    }
    for (let i = 0; i<btns.length; i++) {
        btns[i].classList.remove("on-page");
    }
    document.getElementById(`${id}`).style.display = "block";
    btn.classList.add("on-page");
}

function emailButton() {
    alert("Sorry, this is not yet implemented!")
}

function mailButton() {
    alert("I don't think you can send physical mail over the internet.")
}