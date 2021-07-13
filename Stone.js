class Stone{
    constructor(x,y,width){
        var StoneOptions = {
            mass:5,
            restitution:0.4,
            density:5

            
            
        }
        this.body = Bodies.circle(x,y,width,StoneOptions);
        this.width = width;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        
       

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width);


        pop();


    }
}