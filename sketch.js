var star,planet1,planet2,planet3,planet4;

var starimage,planet1image,planet2image,planet3image,planet4image;

function preload() {
  starimage= loadImage('star.png');
  planet1image= loadImage('planet1.png');
  planet2image= loadImage('planet2.png');
  planet3image= loadImage('planet3.png');
  planet4image= loadImage('planet4.png');
}

function setup() {
  createCanvas(800,800);

  planet1=createSprite(500,400,50,50);
  planet1.addImage(planet1image);
  planet1.scale = 0.05;
  planet1.setCollider("circle",0,0,planet1.width/2);
  planet1.debug = true;

  planet2=createSprite(235,400,50,50);
  planet2.addImage(planet2image);
  planet2.scale = 0.08;
  planet2.setCollider("circle",0,0,planet2.width/2);
  planet2.debug = true;

  planet3=createSprite(400,175,50,50);
  planet3.addImage(planet3image);
  planet3.scale = 0.17;
  planet3.setCollider("circle",0,0,planet3.width/2);
  planet3.debug = true;
   
  planet4=createSprite(400,700,50,50);
  planet4.addImage(planet4image);
  planet4.scale = 0.3;
  planet4.setCollider("circle",0,0,planet4.width/2);
  planet4.debug = true;

  star=createSprite(400,400,50,50);
  star.addImage(starimage);
  star.scale = 0.04;
  star.setCollider("circle",0,0,star.width/2);
  star.debug = true;
}

function draw() {
  background(45,40,100);

  if(frameCount%2==0){
    star.scale=star.scale+0.0008
  }
  if (star.collide(planet1)) {
    planet1.destroy();
  }
  if (star.collide(planet2)) {
   planet2.destroy();
  }
  if (star.collide(planet3)) {
   planet3.destroy();
  }
  if (star.collide(planet4)) {
   planet4.destroy();
  }
  noFill(); 
  ellipse(400,400,210);
  ellipse(400,400,335);
  ellipse(400,400,450);
  ellipse(400,400,610);
  drawSprites();
}