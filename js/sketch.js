let pos = 100;
let index = 0;
let myName = 'Wila Braga'
let waits = [200, 15, 8, 8, 60, 30, 10, 8, 8, 8];
let widths = [85, 38, 35, 55, 30, 65, 60, 60, 60, 20];
let wait = waits[0]
let wide = widths[0]
let final = 0;

function setup() {
  let canvas = createCanvas(700, 150);
  canvas.parent('sketch-holder');
}

function draw() {
  background(255);
  if ((index == 0 || (index == 10 && final < 120)) && frameCount % 80 < 40) {
    stroke(0);
    line(pos, 120, pos + 60, 120);
    if (index == 10) {
      final += 1;
    }
  } else if (index > 0 & index < 10) {
    stroke(0);
    line(pos, 120, pos + 60, 120);
  }
  if (frameCount % wait == (wait - 1)) {
    index++;
    pos += wide;
  }
  if (index > 0) {
    wait = waits[index];
    wide = widths[index];
    textSize(100);
    text(myName.substring(0, index), 100, 120);
  }
}