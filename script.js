window.onload = function(){
    var sections = document.getElementsByClassName("content");
    for (let i = 0; i<sections.length; i++){
        sections[i].style.display = "none";
        sections[i].style.height = "0%";
    }
    document.getElementById(`home-page`).style.display = "block";
    document.getElementById(`home-page`).style.height = "100%";
}

function displayContent(event) {
    var btn = event.target.innerText;
    var id = btn.replace(/\s+/g, '-').toLowerCase();
    var sections = document.getElementsByClassName("content");
    for (let i = 0; i<sections.length; i++){
        sections[i].style.display = "none";
        sections[i].style.height = "0%";
    }
    document.getElementById(`${id}`).style.display = "block";
    document.getElementById(`home-page`).style.height = "100%";
}
