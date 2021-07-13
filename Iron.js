class Iron{
    constructor(x,y,width,height){
        var IronOptions = {
            mass:4,
            restitution:0.2,
            density:5,

            friction: 0.1,
            frictionAir: 0.005,
            frictionStatic: 0.4

            
            
        }
        this.body = Bodies.rectangle(x,y,width,height,IronOptions);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        
       

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(189, 189, 189);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        // ellipseMode(RADIUS);
        // ellipse(0,0,this.width);


        pop();


    }
}