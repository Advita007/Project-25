class ParentClass{
   constructor(x, y, radius) {
       var options = {
           'isStatic':false,
           //'restitution':0.3,
           'friction':0.5,
           'density' : 0.055
           
       }
       this.radius = 120
       this.body = Matter.Bodies.circle(x, y, (this.radius-20), options);
       
       this.image = loadImage("base.png");
       World.add(world, this.body);
     }
     display(){
       var pos = this.body.position
        imageMode(RADIUS);
       image(this.image,pos.x,pos.y,this.radius,this.radius);
       
     }
}
   