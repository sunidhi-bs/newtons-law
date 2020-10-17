class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution:1.1,
            friction:1,
            density : 0.5
          
        }
        this.body = Bodies.circle(x,y,radius,options);
    
        this.radius = radius;
        World.add(world, this.body);
        
      }
      display(){
        var pos =this.body.position;
        push();
        stroke("white");
        pop();
        fill("purple");
        ellipse(pos.x, pos.y, this.radius+20, this.radius+20);
      }
  }
        