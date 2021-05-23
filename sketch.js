var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,180,30);
    block2.shapeColor = "orange";

    block3 = createSprite(480, 580,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(670,580,180,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=4;
    ball.velocityY=4;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
        ball.bounceOff(block1);
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;

        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        music.play();
        ball.bounceOff(block3);
    }


    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        music.play();
        ball.bounceOff(block4);
    }

    drawSprites();
}

function bounceOff(movingRect, fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }

  function isTouching(object1, object2){ 
    if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
      object2.x - object1.x < object2.width/2 + object1.width/2 && 
      object1.y - object2.y < object2.height/2 + object1.height/2 && 
      object2.y - object2.y < object2.height/2 + object1.height/2) 
      {
        return true; 
      } 
      else{ 
        return false; 
      } 
    }