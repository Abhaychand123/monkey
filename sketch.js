var monkey , monkey_running
var banana ,bananaImage, nungjao, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
let invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,198,1500,20);
  ground.velocityX=-2;
  ground.x = ground.width /2;
  
  invisibleGround = createSprite(200,205,1500,20);
  invisibleGround.visible  = false;
  
FoodGroup = new Group()
obstacleGroup = new Group()

}


function draw() {
  background("blue");
//console.log(monkey.y)

  
 if(keyDown("space")&& monkey.y >= 130) {
        monkey.velocityY = -14;
         console.log(monkey.y)
 } 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
    
  yong()
  nung()
  drawSprites();
}
function yong(){
 if (frameCount%80===0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,175));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
   FoodGroup.add(banana)
 }
 
}


function nung(){
 if (frameCount%300===0) {
     nungjao = createSprite(600,200,40,10);
    nungjao.y = Math.round(random(160,160));
    nungjao.addImage( obstaceImage);
    nungjao.scale = 0.2;
    nungjao.velocityX = -6.5;
    nungjao.lifetime = 200;
   obstacleGroup.add(nungjao)
 }
 
}