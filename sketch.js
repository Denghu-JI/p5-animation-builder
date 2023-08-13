let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
let x3 = 0
let y3 = 0
let x4 = 0
let y4 = 0

//warning parameters
let warningCount = 100
let warningFadeout = 100
let warningFadeoutStep = 255/warningFadeout

//theme parameters
let timeStamp = 700

//lightning parameters
let lightWeight = 255
let lightningFadeOut = 75
let lightningFadeOutStep = lightWeight/lightningFadeOut


function setup() {
  createCanvas(800, 800);
}

function draw() {
  movieBackground(20)
  warningAnimation()
  titleAnimation()
  lightningAnimation()
}




function movieBackground(std) {
  background(Math.floor(Math.random() * std))
  dotEffect(5000)
}

function dotEffect(amount, stroke) {
  for (i=0; i < amount; i++) {
    fill(50);
    x = Math.floor(Math.random() * 800)
    y = Math.floor(Math.random() * 800)
    circle(x, y, 5);
  }
}



function warning(c) {
  fill(c)
  textSize(16);
  strokeWeight(0.5);
  textAlign(CENTER, TOP);
  text("A very small percentage of individuals may experience epileptic seizures when exposed to certain light patterns or flashing lights. Exposure to certain patterns or backgrounds on a computer screen, or while playing video games, may induce an epileptic seizure in these individuals. Certain conditions may induce previously undetected epileptic symptoms even in persons who have no history of prior seizures or epilepsy.If you, or anyone in your family, have an epileptic condition, consult your physician prior to playing. If you experience any of the following symptoms while playing a video or computer game -- dizziness, altered vision, eye or muscle twitches, loss of awareness, disorientation, any involuntary movement, or convulsions -- IMMEDIATELY discontinue use and consult your physician before resuming play.", 0, 0,800)
}

function warningAnimation() {
  if (warningCount > 0) {
    warningCount -= 1
    warning(255)
  }
  if (warningCount == 0 & warningFadeout > 0) {
    warning(255 - (100 - warningFadeout)*warningFadeoutStep)
    warningFadeout -= 1
  }
}

function titleAnimation() {
  if (timeStamp > 0) {
    timeStamp -= 1
    if (timeStamp < 500 & timeStamp > 400) {
      c = 0 - 2.5*(timeStamp - 500)
      title(c, c)
    }
    if (timeStamp < 400 & timeStamp > 200) {
      title(255, 255)
    }
    if (timeStamp < 200 & timeStamp > 195) {
      title(255, "#ff2d00")
    }
    if (timeStamp < 195 & timeStamp > 170) {
      title(255, 255)
    }
    if (timeStamp < 170 & timeStamp > 165) {
      title(255, "#ff2d00")
    }
    if (timeStamp < 165 & timeStamp > 0) {
      title(255, 255)
    }
  }
  if (timeStamp == 0) {
    lightning()
    timeStamp = -1 //turnoff!
  }
}

function title(c1,c2) {
  fill(c1)
  textSize(32);
  strokeWeight(1);
  textAlign(CENTER, TOP);
  text("The Moving", 0, 300,630)
  fill(c2)
  textSize(32);
  strokeWeight(1);
  textAlign(CENTER, TOP);
  text("Franko", 0, 300,970)
}

function lightning() {
  lightningFadeOut = 50
}

function lightningAnimation() {
  if (lightningFadeOut > 0) {
    lightningFadeOut -= lightningFadeOutStep
    push()
    fill(255,255,255,(255/50)*lightningFadeOut)
    rect(0,0,800,800)
    pop()
  }
}

//title work done, now monster work!

function lineAnimation(x1, y1, x2, y2, c, n, std) {
  push()
  stroke(c)
  for (let i = 0; i < n; i++) {
    xd = Math.floor(Math.random() * (2*std)) - std
    yd = Math.floor(Math.random() * (2*std)) - std
    x1d = Math.floor(Math.random() * (2*std)) - std
    y1d = Math.floor(Math.random() * (2*std)) - std
    line(x1 + xd, y1 + yd, x2 + x1d, y2 + y1d)
  }
  pop()

}

function curveAnimation(x1, y1, x2, y2, x3, y3, x4, y4, c, n, std) {
  push()
  stroke(c)
  for (let i = 0; i < n; i++) {
    xd1 = Math.floor(Math.random() * (2*std)) - std
    yd1 = Math.floor(Math.random() * (2*std)) - std
    xd2 = Math.floor(Math.random() * (2*std)) - std
    yd2 = Math.floor(Math.random() * (2*std)) - std
    xd3 = Math.floor(Math.random() * (2*std)) - std
    yd3 = Math.floor(Math.random() * (2*std)) - std
    xd4 = Math.floor(Math.random() * (2*std)) - std
    yd4 = Math.floor(Math.random() * (2*std)) - std
    curve(x1 + xd, y1 + yd, x2 + x1d, y2 + y1d)
  }
  pop()

}



function testCurve(x1,y1,x2,y2,x3,y3,x4,y4) {
  circle(x1, y1, 10)
  circle(x2, y2, 10)
  circle(x3, y3, 10)
  circle(x4, y4, 10)
  // curve(x1,y1,x2,y2,x3,y3,x4,y4)
  beginShape();
  curveVertex(x1, y1);
  curveVertex(x2, y2);
  curveVertex(x3, y3);
  curveVertex(x4, y4);
  endShape();
}

function keyPressed() {
  if (key === 'v') {
    x1 = mouseX
    y1 = mouseY

  } else if (key === 'b') {
    x2 = mouseX
    y2 = mouseY

  } else if (key === 'n') {
    x3 = mouseX
    y3 = mouseY

  } else if (key === 'm') {
    x4 = mouseX
    y4 = mouseY

  }
  
  return false; // prevent any default behavior
}
