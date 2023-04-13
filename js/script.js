function writeCommand(line) {
    if (line < commands.length) {
        term[line].style.visibility = "visible";
        let i = 0;
        int = setInterval(() => {
            if (i < commands[line].length) {
                com[line].innerHTML += commands[line].charAt(i);
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

    afterLoaded();

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
    fileScreen.style.width = "calc(100% - 150px)";
}

function showNav() {
    let sidenav = document.getElementById("sidenav");
    let smallnav = document.getElementById("smallnav");
    let fileScreen = document.getElementById("fileScreen");
    sidenav.style.display = "block";
    smallnav.style.display = "none";
    fileScreen.style.width = "calc(100% - 375px)";
}

function afterLoaded() {
    if (window.innerWidth < 650) {
        hideNav();
    }
    
    window.addEventListener("resize", function(event) {
        if (window.innerWidth < 650) {
            hideNav();
        }
    })
    loadLineNumber();
}

function loadLineNumber() {
    let lineNum = document.getElementById("lineNumbers");
    // let fHeight = document.getElementById("fileName").offsetHeight;
    // let pHeight = document.getElementById("lineNum").offsetHeight;
    let fHeight = 42 + 12;
    let pHeight = 26;
    let num = Math.floor((window.innerHeight - fHeight) / pHeight);
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
