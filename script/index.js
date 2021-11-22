let navbar1 = document.getElementById('navbar1');
let menu = document.getElementById('menu');
let body_section = document.getElementById('body_section');
let toolkit = document.getElementById('toolkit');
let proficiency = document.getElementById('proficiency');
let tiles = document.getElementById('tiles');
var check = false;
let loadCheck = true;

function tool() {
    proficiency.style.display = "block";
    setTimeout(() => {
        proficiency.style.width = "60%";
        proficiency.style.height = "fit-content"
    }, 100);
    setTimeout(() => {
        tiles.style.display = "flex";
    }, 900);
}

function closeTool() {
    if (proficiency.style.width === "0px") {
        tool();
        check = true;
    }
    // else if(loadCheck === true) {
    //     tool();
    //     loadCheck = false;
    //     setTimeout(() => {
    //         closeTool();
    //     }, 1500);
    // }
    else {
        proficiency.style.width = "0px";
        proficiency.style.height = "0px";
        tiles.style.display = "none";
        setTimeout(() => {
            proficiency.style.display = "none";
        }, 900);
        check = false;
    }
}

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
    if(check === true)
    closeTool();
}

body_section.onclick = closeIt;

