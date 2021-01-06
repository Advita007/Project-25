class BaseClass1{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            
        }
        
        this.body = Bodies.rectangle(x, y, 200, 200, options);
        this.width = 250;
        this.height = 250;
        this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        fill("black")
        image(this.image, 1000, 540, this.width, this.height);
       
      }
}