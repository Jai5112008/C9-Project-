var box;
function setup() {
  createCanvas(400,400);
  background(30);
  box = createSprite(200,200); 
}



function draw() {

  if(keyIsDown(DOWN_ARROW))
  {
  background("red");
  
  }  

  if(keyIsDown(RIGHT_ARROW))
  {
  background("blue");

  }

  if(keyIsDown(LEFT_ARROW))
  {
  background("green");

  }

  if(keyIsDown(UP_ARROW))
  {
  background("black");

  }

  drawSprite()

}

