class Boy{
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
         'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.boy = loadImage("mangoes/boy.js")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("Plucking mangoes/tree.png",treeAnimation);
      World.add(world, this.body);
    }
    display(){
     // image(this.boy,38,530)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     
     rect(0, 0, this.width, this.height);
      pop();
    }
 };