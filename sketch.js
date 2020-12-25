var car;
var wall1;
var speed,weight;

function setup() {
  createCanvas(800,400);
 wall1= createSprite(700, 200, 60,150);
 wall1.shapeColor="black"

 car=createSprite(100,200,40,40)
car.shapeColor="white"

speed=Math.round(random(55,90))
weight=Math.round(random(400,1500))

 car.velocityX=speed;


}

function draw() {
  background(193); 
  if(wall1.x-car.x <(car.width+wall1.width)/2) 
   {
 car.vleocityX=0
 speed=0

  var deformation=0.5*weight*speed*speed/22509;

  if(deformation>180)
    {
car.shapeColor="red"
    }
  if(deformation<180 && deformation>100)
 {
    car.shapeColor="yellow"
  }

if(deformation<100)
{
  car.shapeColor="green"
}  
}
  drawSprites();
}