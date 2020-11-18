class Paper
{
    constructor(diameter)
    {
       var options=
       {
            restitution:0.4,
            friction:0.5,
            density:1.2
       }     
       this.body=Matter.Bodies.circle(100,600,diameter,options);
       this.diameter=diameter;
       World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        circle(0,0,this.diameter);
        pop();
    }
}