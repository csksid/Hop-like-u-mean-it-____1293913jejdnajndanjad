var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png")
  rabbitImg = loadImage("rabbit.png")
  carrotImg = loadImage("apple.png")
  redImg = loadImage("redimage.png")
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = mouseX
 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
   var select_sprites = Math.round(random(1,2));

   if (frameCount % 80 == 0){
     if(select_sprites == 1){
       createApples()
     }
     else {
       createLeaves()
     }
   }
  
  //call the function randomly according to select_sprites
  

}

function createApples() {
apple = createSprite(random(50, 350), 40, 10, 10)
apple.addImage(carrotImg)
apple.scale = 0.09
apple.velocityY = 5
apple.lifetime = 350
}

function createLeaves() {
  redL = createSprite(random(50, 350), 40, 10, 10)
  redL.addImage(redImg)
  redL.scale = 0.09
  redL.velocityY = 5
  redL.lifetime = 350
}


