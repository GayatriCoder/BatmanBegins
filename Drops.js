class Drops
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.trajectory=[];
        World.add(world,this.body);
        
    }

    display()
    {

        if(this.body.position>height)
        {
            Matter.Body.setPosition(this.body, x, y , options);

        }

    }

}