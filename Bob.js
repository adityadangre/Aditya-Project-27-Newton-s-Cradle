class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8
        }
    this.body=Bodies.circle(x,y,20,option);

    World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        stroke("yellow");
        strokeWeight(5);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius);
    }
}