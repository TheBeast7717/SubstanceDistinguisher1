class Rubber{
    constructor(x,y,width){
        var RubberOptions = {
            mass:0.1,
            restitution:0.6,
            density:1,

            friction: 0.01,
            frictionAir: 0.001,
            frictionStatic: 0.05

            
            
        }
        this.body = Bodies.circle(x,y,width,RubberOptions);
        this.width = width;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        
       

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(206, 209, 214);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width);


        pop();


    }
}