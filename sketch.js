var bullet, block;
var speed, weight, thickness;
function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  block=createSprite(700,200,thickness,height/2);
  block.shapeColor = color(150,150,150);

  bullet=createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255)

  
}

function draw() {
  background(0);  

  if (hasCollided(bullet,block)){
    bullet.velocityX=0
    var damage = 0.5*weight*speed*speed/(thickness * thickness * thickness);
  
  if(damage>10){
    block.shapeColor = color(255,0,0);
  }

  if(damage<10){
    block.shapeColor=color(0,255,0);
  }
  }


  drawSprites();
}
function hasCollided(lbullet, lblock){
  bulletRightEdge =lbullet.x + lbullet.width;
  blockLeftEdge=lblock.x;
  if (bulletRightEdge>=blockLeftEdge){
    return true;
  }
  return false;
}