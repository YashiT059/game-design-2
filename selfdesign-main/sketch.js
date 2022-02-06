var gamestate  =  0;
var firstImg, secondImg, diverImg, pearlImg, gemImg, fishBImg, fishYImg, bgImg
var sea
var diver
var fishGroup
var goldGroup

function preload (){
firstImg = loadImage("assets/firstPage.png")

secondImg = loadImage("assets/instructionImg.png")

diverImg = loadImage("assets/scuba diver.png")

pearlImg = loadImage("assets/pearl.png")

gemImg = loadImage("assets/gem.gif")

fishBImg = loadImage ("assets/blackfish.png")

fishYImg = loadImage ("assets/yellowfish.png")

bgImg = loadImage ("assets/scrolling.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode('CENTER')

  sea = createSprite (600,200)
  sea.addImage("sea",bgImg)
  sea.visible = false
  sea.scale= 2

  diver = createSprite(width/2,height-200)
  diver.addImage("diver",diverImg)
  diver.visible = false

  fishGroup = new Group()

  goldGroup = new Group()
}

function draw() {
  background(255,255,255);  

  if (gamestate == 0){
  background(firstImg)

  if (keyDown("space")){
    gamestate  =1
  }
  }

  if (gamestate == 1){
       background(secondImg)

       if (keyDown("s")){
        gamestate  =2
      }
  }

  if (gamestate == 2){
    gameplay()
  }


  drawSprites();
}

function gameplay(){
  sea.visible = true 
  sea.velocityY=10
  if (  sea.y > 1000){
    sea.y = sea.height/2
  }
  diver.visible=true

  if(keyDown(RIGHT_ARROW)){
     diver.x+=6
  }

  if(keyDown(LEFT_ARROW)){
    diver.x-=6
 }

 if(keyDown(UP_ARROW)&& keyDown(RIGHT_ARROW)){
  diver.x+=6
  diver.y-=5
}

if(keyDown(UP_ARROW)&& keyDown(LEFT_ARROW)){
  diver.x-=6
  diver.y-=5
}

if(keyDown(DOWN_ARROW)&& keyDown(RIGHT_ARROW)){
  diver.x+=6
  diver.y+=5
}

if(keyDown(DOWN_ARROW)&& keyDown(LEFT_ARROW)){
  diver.x-=6
  diver.y+=5
}

if (frameCount%60==0){
  var ran = Math.round(random(1,4))
  if (ran==1){
    spawnFish(fishBImg,+7)
  }
  if (ran==2){
    spawnFish(fishYImg,-7)
  }

  if (ran==3){
    spawnGold(gemImg)
  }

  if (ran==4){
    spawnGold(pearlImg)
  }
}
}

function spawnFish(spriteImage,v){

  var sprite = createSprite(random(0,width),random(height/2-100, height/2+100))
  sprite.addImage(spriteImage)
  sprite.velocityX = v
  fishGroup.add(sprite)
}

function spawnGold(spriteImage){

  var sprite = createSprite(random(0,width),random(height/2-100, height/2+100))
  sprite.addImage(spriteImage)
  goldGroup.add(sprite)
}