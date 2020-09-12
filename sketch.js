var car, wall;
var speed,weight,deformation;
var speedUpArrow, speedDownArrow, weightUpArrow, weightDownArrow;
var randomButton;


function setup() {
  createCanvas(1400,800);

  car = createSprite(200,400,25,25);
  wall = createSprite(1000,400,15,100);

  speedUpArrow = createSprite(525,115,25,25);
  speedDownArrow = createSprite(525,145,25,25);

  weightUpArrow = createSprite(925,115,25,25);
  weightDownArrow = createSprite(925,145,25,25);

  randomButton = createSprite(625,50,300,75);
  randomButton.shapeColor = "white";

  speed = 500;
  weight = 500;
  deformation = 0;
}

function draw() {
  background(0);
  console.log(deformation);

  if(keyWentDown("space") && car.x == 200){
    start();
  }

  if(wall.x - car.x <= car.width/2 + wall.width/2){
    crash();

    if(keyWentDown("r" || "R")){
      reset();
    }
  }

  if(mouseWentDown(LEFT) && mouseIsOver(speedUpArrow) && speed < 500 && car.x == 200){
    speed = speed + 1;
  }

  if(mouseWentDown(LEFT) && mouseIsOver(speedDownArrow) && speed > 0 && car.x == 200) {
    speed = speed - 1;
  }


  if(mouseWentDown(LEFT) && mouseIsOver(weightUpArrow) && weight < 500 && car.x == 200){
    weight = weight + 1;
  }

  if(mouseWentDown(LEFT) && mouseIsOver(weightDownArrow) && weight > 0 && car.x == 200) {
    weight = weight - 1;
  }



  if(mouseWentDown(LEFT) && mouseIsOver(randomButton) && car.x == 200) {
    speed = Math.round(random(1,500));
    weight = Math.round(random(1,500));
  }
  

  drawSprites();

  
  textSize(40);
  fill(255);
  text(speed,425,150);
  text(weight,825,150);
  textAlign(CENTER);
  text("Speed:",350,150);
  text("Weight:",750,150);

  fill(0);
  text("Random",620,65);
}

function start(){
    car.velocityX = speed/10;
}

function crash(){
    car.velocityX = 0;
    car.x = 980;

    deformation = 0.5*weight/2*speed/50;

    if(deformation<100){
      car.shapeColor = "green";
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }

    if(deformation>180){
      car.shapeColor = "red";
    }
}

function reset(){
    car.x = 200;
    deformation = 0;
    car.shapeColor = "grey";
}