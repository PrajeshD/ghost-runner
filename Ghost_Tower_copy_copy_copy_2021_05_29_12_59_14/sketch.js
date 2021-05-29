var climberimg, doorimg, ghoststandimg, ghostjumpimg, towerimg;
var doorgroup, climbergroup;
var tower, ghost;
function preload(){
climberimg = loadImage("climber.png");
doorimg = loadImage("door.png");
ghoststandimg = loadImage("ghost-standing.png");
ghostjumpimg = loadImage("ghost-jumping.png");    
towerimg = loadImage("tower.png");    
  
}



function setup(){
createCanvas (600,600) 
tower = createSprite(300,300);
tower.addImage(towerimg);
doorgroup= new Group();
climbergroup= new Group();
ghost = createSprite(300,300,20,40);
ghost.addAnimation("standing",ghoststandimg);
ghost.addAnimation("jumping",ghostjumpimg);
ghost.scale=0.4;
}

function draw(){
drawSprites();  
tower.velocityY = 2;  
if(tower.y>600){
tower.y = 600-tower.height/2; 
}  
spawndoors();
if (keyDown("up")){
ghost.velocityY= -10;
ghost.changeAnimation("jumping");
  
}
else ghost.changeAnimation("standing");  
ghost.velocityY= ghost.velocityY+0.8;
if (keyDown("left")){
ghost.x= ghost.x-3  
}
if (keyDown("right")){
ghost.x= ghost.x+3  
}
if(climbergroup.isTouching(ghost)){
ghost.velocityY= 0;  
}
ghost.setCollider("rectangle",0,120,50,50)
ghost.debug=true
}



function spawndoors(){
if (frameCount%100==0){
var door= createSprite(200,-50);
var climber = createSprite(200,10);
door.velocityY= 2;
climber.velocityY= 2;  
door.addImage(doorimg);
climber.addImage(climberimg);
door.x = random(200,400);
climber.x=door.x;
door.lifetime=800;
climber.lifetime=800;
doorgroup.add(door);
climbergroup.add(climber);
door.scale= 0.8;
climber.scale= 0.8;  
door.depth=ghost.depth-1;
}
  
}