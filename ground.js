// class Ground{
//     constructor(x,y,width,height){
//         var groundOptions = {
//             isStatic:true
//         }
//         this.body = Bodies.rectangle(x,y,width,height,groundOptions);
//         this.width = width;
//         this.height = height;
//         World.add(world,this.body);

//     }

//     display(){
//         var pos = this.body.position;
       

//         push();
        

//         translate(pos.x,pos.y);
//         rectMode(CENTER);
//         rect(0,0,this.width,this.height);

//         pop();



//     }
// }

class Ground{
    constructor(x,y,width,height){
        var groundOptions = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundOptions);
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
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();


    }




}