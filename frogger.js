let frogX = 190;
let frogY = 360;
let frogSize = 40;

let cars = [];
let carY = [40, 80, 120, 200, 240, 280];
let carColor = ["red", "tan", "blue", "white"];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 7; i++) {
    cars.push(new Car(random(0, 400), random(carY), random(2, 4), carColor[floor(random(4))]));
  }
}

function draw() {
  background(220);
  lanes();
  moveCars();
  checkCollisions();
  displayFrog();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    frogY -= frogSize;
    if (frogY < 0) { // Check if frogY is negative
      frogY = 360; // Reset frogY to 360
    }
  } else if (keyCode === DOWN_ARROW) {
    frogY += frogSize;
  } else if (keyCode === LEFT_ARROW) {
    frogX -= frogSize;
    if (frogX < 0) { // Check if frogX is negative
      frogX = 360; // Reset frogX to 360
    }
  } else if (keyCode === RIGHT_ARROW) {
    frogX += frogSize;
  }
}


function displayFrog() {
  push();
  translate(frogX, frogY);
  scale(frogSize / 40);
  noStroke();
  fill("darkgreen");
  rect(0, 0, 40, 40);
  pop();
}

function lanes() {
  fill("limegreen");
  rect(0, 0, 400, 40);
  rect(0, 160, 400, 40);
  rect(0, 310, 400, 90);
  fill("grey");
  stroke("yellow");
  strokeWeight(2);
  rect(0, 40, 400, 40);
  rect(0, 80, 400, 40);
  rect(0, 120, 400, 40);
  rect(0, 200, 400, 40);
  rect(0, 240, 400, 40);
  rect(0, 280, 400, 40);
}

function moveCars() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();
  }
}

function checkCollisions() {
  for (let i = 0; i < cars.length; i++) {
    if (frogY === cars[i].y && frogX >= cars[i].x && frogX <= cars[i].x + cars[i].width) {
      console.log("Game Over");
      frogY = 360;
    }
  }
}

class Car {
  constructor(x, y, speed, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.width = 40;
    this.height = 40;
    this.direction = random([-1, 1]);
  }

  move() {
    this.x += this.speed * this.direction;
    if (this.x <= 0 || this.x >= 360) {
      this.direction = -this.direction;
    }
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
