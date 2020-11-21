class Blocks {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2.0,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<4){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(World,this.body);
        push();
        this.visibility = this.visibility-5; 
        pop();
      }
    }
  };
  