var fixedRect,movingRect;
 function setup(){ 
 createCanvas(600,600);
  fixedRect=createSprite(300,300,40,200); 
  movingRect=createSprite(200,200,20,100); 
  } 
  function draw(){
  	background("white");
   movingRect.x=mouseX; 
   movingRect.y=mouseY; 
   drawSprites();
   
   if((fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)&&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
   	&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&movingRect.y-fixedRect.x<fixedRect.height/2+movingRect.height/2)
    {
   	fixedRect.shapeColor="red";
   	movingRect.shapeColor="red";
   }else {
   fixedRect.shapeColor="green";
   	movingRect.shapeColor="green";
   }
    

   }
