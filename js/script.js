function writeCommand(line) {
    if (line < commands.length) {
        term[line].style.visibility = "visible";
        let i = 0;
        int = setInterval(() => {
            if (i < commands[line].length) {
                com[line].innerHTML += commands[line].charAt(i);
                i++;
            } else if (i < commands[line].length + 1){
                i++;
            } else {
                clearInterval(int);
                cursor[line].style.display = "none";
                writeCommand(line+1);
            }
        }, 50);
    } else {
        hideLoader();
    }
}

function runLoader() {
    let loaded = document.getElementById("loaded");
    document.body.style.backgroundColor = "#380C2A";
    loaded.style.display = "none";
    writeCommand(0);
}

function hideLoader() {
    
    setTimeout(() => {
        let loader = document.getElementById("loader");
        let loaded = document.getElementById("loaded");
        loader.style.display = "none";
        loaded.style.display = "block";
        document.body.style.backgroundColor = "#1E1E1E";
    }, 300);

    setTimeout(() => {
        afterLoaded();
    }, 400);

}

function skipLoader() {
    if (int) {
        clearInterval(int);
    }
    hideLoader();
}

function hideNav() {
    let sidenav = document.getElementById("sidenav");
    let smallnav = document.getElementById("smallnav");
    let fileScreen = document.getElementById("fileScreen");
    sidenav.style.display = "none";
    smallnav.style.display = "block";
    if (window.innerWidth < 1000) {
        fileScreen.style.width = "calc(100% - 75px)";
        fileScreen.style.marginLeft = "0px";
    } else {
        fileScreen.style.width = "calc(100% - 150px)";
        fileScreen.style.marginLeft = "0px";
    }
}

function showNav() {
    let sidenav = document.getElementById("sidenav");
    let smallnav = document.getElementById("smallnav");
    let fileScreen = document.getElementById("fileScreen");
    sidenav.style.display = "block";
    smallnav.style.display = "none";
    if (window.innerWidth < 1000) {
        sidenav.style.zIndex = 1;
        sidenav.style.position = "absolute";
        fileScreen.style.marginLeft = "75px";
        fileScreen.style.width = "calc(100% - 75px)";
    } else {
        sidenav.style.zIndex = 0;
        fileScreen.style.marginLeft = "0px";
        sidenav.style.position = "relative";
        fileScreen.style.width = "calc(100% - 400px)";
    }
}

function afterLoaded() {
    if (window.innerWidth < 1000) {
        horizontalSocial();
        hideNav();
    }
    
    window.addEventListener("resize", function(event) {
        if (window.innerWidth < 1000) {
            horizontalSocial();
            hideNav();
        } else {
            verticalSocial();
            showNav();
        }
    })
    loadLineNumber();
}

function verticalSocial() {
    let social = document.getElementById("social");
    social.style.width = "75px";
    social.style.float = "left";
    social.style.height = "calc(100% - 5px)";
    social.style.paddingTop = "5px";
    social.style.bottom = "none";
    social.style.position = "relative";

    let sidenav = document.getElementById("sidenav");
    let smallnav = document.getElementById("smallnav");
    let fileScreen = document.getElementById("fileScreen");
    sidenav.style.height = "100%";
    smallnav.style.height = "100%";
    fileScreen.style.height = "100%";
    
    for (const child of social.children) {
        child.style.padding = "7px 0";
    }
}

function horizontalSocial() {
    let social = document.getElementById("social");
    social.style.width = "100%";
    social.style.float = "none";
    social.style.bottom = "0";
    social.style.position = "fixed";
    social.style.height = "75px";
    social.style.paddingTop = "0";

    let sidenav = document.getElementById("sidenav");
    let smallnav = document.getElementById("smallnav");
    let fileScreen = document.getElementById("fileScreen");
    sidenav.style.height = "calc(100% - 75px)";
    smallnav.style.height = "calc(100% - 75px)";
    fileScreen.style.height = "calc(100% - 75px)";

    for (const child of social.children) {
        child.style.padding = "7px 15px";
    }
}

function loadLineNumber() {
    let lineNum = document.getElementById("lineNumbers");
    // let fHeight = document.getElementById("fileName").offsetHeight;
    // let pHeight = document.getElementById("lineNum").offsetHeight;
    let fHeight = 42 + 12;
    // if (window.innerWidth < 1000) {
    //     fHeight += 75;
    // }

    let wHeight = document.getElementById("fileScreen").scrollHeight;

    if (window.innerHeight > wHeight) {
        wHeight = window.innerHeight;
    }
    let pHeight = 26;
    let num = Math.floor((wHeight - fHeight) / pHeight);
    for (let i = 0; i < num - 1; i++) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${i+2}`);
        p.appendChild(text)
        lineNum.appendChild(p);
    }
}

let term = document.getElementsByClassName("terminalLine");
let com = document.getElementsByClassName("command");
let cursor = document.getElementsByClassName("cursor");
let int;

let commands = [
    "mkdir wila_website",
    "cd wila_website",
    "touch index.html",
    "mkdir projects",
    "mkdir hobbies",
    "touch resume.html",
    "cd ..",
    "./populate_sites.sh wila_website",
    "code wila_website"
];
