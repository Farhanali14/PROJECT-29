class Stone{
    constructor(x,y,r)
    {
      var options={
          isStatic: false,
          restitution: 0.8
      };
      this.body = Bodies.circle(x,y,r,options);
      this.x = x;
      this.y = y;
      this.r = r;
     // this.width = width;
     // this.height = height;

      World.add(world,this.body)
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("black");
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop();

    }
}