var trex, trex_running, trex_collided, ground, groundImage, invisible_ground;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  trex_collided = loadImage("trex_collided.png");
  
}



function setup() {
  createCanvas(400, 400);
  trex = createSprite(40,380,20,50);
  trex.addAnimation("trex_running",trex_running);
  trex.scale = 0.5
   ground = createSprite(200,380,400,20);
   ground.addImage("g2", groundImage);
   ground.x = ground.width /2;

//invisible Ground to support Trex
invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

  
}

function draw() {
  background(220);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") ){
      trex.velocityY = -12 ;
      
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
     trex.collide(ground) 
  drawSprites();
}