function setup(){
     createCanvas(600,400);
     background(247, 66, 196);
} 
  function draw (){
       if(mouseIsPressed){
      paint(mouseX, mouseY)
      
     }rowOfSquare();
  }  rowOfcrircles();
  
 function paint(x,y){
      fill(255,0,150);
      noStroke();
      ellipse(x,y,100,100);
 }
 
 function rowOfSquare(){5
     fill(66, 244, 244);
     for(var i = 50; i<600; i+=100){
         rect(i,200,50,50);
         
         
  
 