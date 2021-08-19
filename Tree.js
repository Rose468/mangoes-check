class Tree {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
         'restitution':0.8,
          'friction':1.0,
          'density':1.0
         
      }
      this.tree1 = loadImage("mangoes/tree.png");
      this.tree1.scale = 0.05;
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("Plucking mangoes/tree.png",treeAnimation);
      World.add(world, this.body);
      
    }
    display(){
      image(this.tree1,337,10);
      //this.tree1.scale = 0.005
      
      
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