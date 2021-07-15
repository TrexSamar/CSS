class Bob{
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            density : 2,
            friction : 1.0,
            restitution : 0.5,
           
        }        
        this.x = x;   
        this.y = y; 
        this.r = r;      
         

        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER)
        fill('magenta')
        ellipse(0, 0, this.r, this.r)
        pop()



      }
  
}
