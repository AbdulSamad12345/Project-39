var road, roadImg;
var car, carImg, carCrash , carCrashImg;
var ob1, ob1Img, ob1G,ob2, obImg, ob3G, ob3, ob3Img, ob1G,ob2G,ob3G;
var oppCar,oppCarImg,oppCarG;

var distance=0;

var gameOver, gameOverImg;

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  
  roadImg=loadImage("road.png");
  carImg=loadImage("car.png");
  ob1Img=loadImage("obstacle1.png");
  ob2Img=loadImage("obstacle2.png");
  ob3Img=loadImage("obstacle3.png");
  oppCarImg=loadImage("oppCar.png");
  gameOverImg=loadImage("gameOver.png");
  
}

function setup() {
  createCanvas(325,600);
  
  road=createSprite(150,450,10,10);
  road.addImage(roadImg);
  road.scale=2;
  
  car=createSprite(150,400,10,10);
  car.addImage(carImg);
  car.scale=0.4;
  
  ob1G=createGroup();
  ob2G=createGroup();
  ob3G=createGroup();
  oppCarG=createGroup();
  
  gameOver=createSprite(150,250,10,10);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.7;
  
  edges=createEdgeSprites();
  
}

function draw() {
  background("black");
  
     car.collide(edges[1]);
     car.collide(edges[3]);
  
  if(gameState===PLAY){
    
    gameOver.visible=false;
    distance = distance + Math.round(getFrameRate()/30)
  
    if(car.x<7){
      car.x=10;
    }
    
 if(keyDown("RIGHT_ARROW")){
   car.x=car.x+7;
 }
    
  if(keyDown("LEFT_ARROW")){
    car.x=car.x-7;
  }

  // if(keyDown("UP_ARROW")){
  //   car.x = car.y7;
  // }
    
  road.velocityY=(4+2*distance/100);
  
  if(road.y>500){
    road.y=height/2
  }
    
  if(frameCount%80===0){
    var spSelect=Math.round(random(1,4));
    if(spSelect===1){
      obstacle1();
    }else if(spSelect===2){
      obstacle2();
    }
  else if(spSelect===3){
    obstacle3();
  }else if(spSelect===4){
    oppCarSp();
  }
    
  }  
    
    
     
    
  
    if(ob1G.isTouching(car)){
      ob1.velocityY=0;
      gameState=END;
    }
    
    if(ob2G.isTouching(car)){
      ob2.velocityY=0;
      gameState=END;
    }
    
    if(ob3G.isTouching(car)){
      ob3.velocityY=0;
      gameState=END;
    }
    
    if(oppCarG.isTouching(car)){
      oppCar.velocityY=0
      gameState=END;
    }
    
  
  
  } 
  drawSprites();

  camera.position.x = car.x;
  
  // camera.position.y = car.y;
  
  if(gameState===END){
    distance=0;
    gameOver.visible=true;
    road.velocityY=0;
    
    ob1G.destroyEach();
    ob2G.destroyEach();
    ob3G.destroyEach();
    oppCarG.destroyEach();
    
    textSize(20);
    fill("purple")
    text ("Press UP ARROW to restart",30,300);
    
    if(keyDown("UP_ARROW")){
      restart();
    }
    
  }
  
  textSize(18);
  fill("lime")
  text("Distance:"+distance,100,30)
}

function obstacle1()
{
  if(frameCount%80===0){
    ob1=createSprite(25,0,10,10);
    ob1.addImage(ob1Img);
    ob1.scale=0.09;
    ob1.x=Math.round(random(40,260));
    ob1.velocityY=(3+2*distance/100);
    ob1.setLifetime=300;
    ob1G.add(ob1);
  }
}


function obstacle2()
{
  if(frameCount%80==0){
    ob2=createSprite(25,0,10,10);
    ob2.addImage(ob2Img);
    ob2.scale=0.09;
    ob2.x=Math.round(random(40,260));
    ob2.velocityY=(3+2*distance/100);
    ob2.setLifetime=300;
    ob2G.add(ob2);
  }
}

function obstacle3()
{
  if(frameCount%80===0){
    ob3=createSprite(25,0,10,10);
    ob3.addImage(ob3Img);
    ob3.scale=0.09;
    ob3.x=Math.round(random(40,260));
    ob3.velocityY=(3+2*distance/100);
    ob3.setLifetime=300;
    ob3G.add(ob3);
  }
}

function oppCarSp(){
  
  if(frameCount%80===0){
    oppCar=createSprite(25,0,10,10);
    oppCar.addImage(oppCarImg);
    oppCar.scale=0.4;
    oppCar.x=Math.round(random(40,260));
    oppCar.velocityY=(6+2*distance/100);
    oppCar.setLifetime=300;
    oppCarG.add(oppCar);
  }
  
}

function restart(){
  gameState=PLAY;
  gameOver.visible=false;
  
   ob1G.destroyEach();
   ob2G.destroyEach();
   ob3G.destroyEach();
  
   oppCarG.destroyEach();
  
  distance=0;
  
}










