var astronaut;
var bg,sleep,brush,gym,eat,drink,move;
var edges;


function preload(){
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png")
bath=loadAnimation("bath1.png","bath2.png");
brush=loadAnimation("brush.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat=loadAnimation("eat1.png","eat2.png");
drink=loadAnimation("drink1.png","drink2.png");
move= loadAnimation("move.png","move1.png");


} 

function setup() {
  createCanvas(800,400);

 astronaut= createSprite(300,230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1;
}

function draw() {
  background(bg);  
  drawSprites();

textSize(20);
fill("white");
text("Instruction:",20,35 );
textSize(15);
text("Up Arrow = Brushing ",20,55);
text("Down Arrow = Gymming ",20,70);
text("Left Arrow = Eating ",20,85);
text("Rigth Arrow = Bathing ",20,100);
text(" m key = Moving ",20,115);

edges=createEdgeSprites();
astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
   astronaut.changeAnimation("brushing");
    astronaut.y = 350;
     astronaut.velocityX = 0; 
    astronaut.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
   astronaut.changeAnimation("gymming");
    astronaut.y = 350;
     astronaut.velocityX = 0; 
    astronaut.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
   astronaut.changeAnimation("eating");
   astronaut.x=150;
    astronaut.y = 350;
     astronaut.velocityX = 0.5; 
    astronaut.velocityY = 0.5; 
}
if(keyDown("RIGTH_ARROW")){
  astronaut.addAnimation("bathing", bath);
   astronaut.changeAnimation("bathing");
    astronaut.y = 350;
     astronaut.velocityX = 0; 
    astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("moving", move);
   astronaut.changeAnimation("moving");
    astronaut.y = 350;
     astronaut.velocityX = 1; 
    astronaut.velocityY = 1;
}


}