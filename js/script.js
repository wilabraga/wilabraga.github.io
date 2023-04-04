function writeCommand(line) {
    if (line < commands.length) {
        term[line].style.display = "block";
        let i = 0;
        let int = setInterval(() => {
            if (i < commands[line].length) {
                com[line].innerHTML += commands[line].charAt(i);
                i++;
            } else {
                clearInterval(int);
                cursor[line].style.display = "none";
                writeCommand(line+1);
            }
        }, 100);
    } else {
        hideLoader();
    }
}

function runLoader() {
    writeCommand(0);
}

function hideLoader() {
    let loader = document.getElementById("loader");
    let loaded = document.getElementById("loaded");
    loader.style.display = "none";
    loaded.style.display = "block";
    document.body.style.backgroundColor = "#1E1E1E";
}

let term = document.getElementsByClassName("terminalLine");
let com = document.getElementsByClassName("command");
let cursor = document.getElementsByClassName("cursor");

let commands = [
    "mkdir wila_website",
    "cd wila_website",
    "touch index.html",
    "touch projects.html",
    "touch hobbies.html",
    "touch resume.html",
    "cd ..",
    "./do_the_rest.sh",
    "code wila_website"
];

runLoader();
