let navbar1 = document.getElementById('navbar1');
let menu = document.getElementById('menu');
let body_section = document.getElementById('body_section');

menu.onclick = () => {
    if (navbar1.style.height == "0px") {
        navbar1.style.display = "flex";
        setTimeout(() => {
            navbar1.style.height = "360px";
        }, 100);
    }
    else {
        closeIt();
    }
}

function closeIt() {
    navbar1.style.height = "0px";
    setTimeout(() => {
        navbar1.style.display = "none";
    }, 900);
}

body_section.onclick = closeIt;
