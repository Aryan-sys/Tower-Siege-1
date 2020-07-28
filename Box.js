class Box{
  constructor(x,y){
      var options={ 
          isStatic: false,
          restitution : 0.3,
          friction : 1,
          density: 1.2
      }
     
   
      this.body = Bodies.rectangle(x,y, 60,60, options);
  
      World.add(world,this.body)
      
  }
  display(){
    
   var pos = this.body.position;
     push();
      translate(pos.x, pos.y);
   
      fill("blue");
     
     
      rectMode(CENTER);
      rect(0,0,60,60);
      pop();
    }
  }