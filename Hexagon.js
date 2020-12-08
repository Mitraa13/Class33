class BreakingBall{
    constructor(x, y,radius) {
        var options = {
            'friction':0.05,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,2*radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}