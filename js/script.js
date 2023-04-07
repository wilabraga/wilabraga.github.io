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
}

function skipLoader() {
    if (int) {
        clearInterval(int);
    }
    hideLoader();
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

runLoader();