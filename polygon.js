class Pol{
    constructor(){
        var options={ 
            isStatic: false,
            restitution : 0.3,
            friction : 0,
            density: 1.2
        }
        this.image = loadImage("1.png");
     
        this.body = Bodies.rectangle(200 , 400, 50, 50, options);
         
        World.add(world,this.body)
        
    }
    display(){
      
     var pos = this.body.position;
       push();
        translate(pos.x, pos.y);
     
        fill("blue");
       
        console.log(this.body.position.x);
        imageMode(CENTER);
        image(this.image,0,0,50,50);

        pop();
      }
    }