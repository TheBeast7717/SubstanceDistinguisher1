// class Hammer{
//     constructor(x,y,width,height,angle){

//       var hammerOptions = {
//             mass:0.01,
//             density:10

//         }
//         this.body = Bodies.rectangle(x,y,width,height,hammerOptions);
//         this.width = width;
//         this.height = height;
//         Matter.Body.setAngle(this.body,angle);
//         World.add(world,this.body);
        

//     }

//     display(){
//         var pos = this.body.position;
//         var angle = this.body.angle;

//        push();
//        translate(pos.x,pos.y);
//        rotate(angle);

//        rect(0,0,this.width,this.height);

//        pop();
        

//     // var pos = this.body.position;
//     // var angle = this.body.angle;
//     // push();
//     // translate(pos.x, pos.y);
//     // rotate(angle);
//     // rectMode(CENTER);
//     // fill(255);
//     // stroke("green");
//     // strokeWeight(5);
//     // rect(0, 0, this.width, this.height);
//     // pop();
  

//     }
// }

class Hammer{
    constructor(x,y,width,height){
        var hammerOptions = {
            mass:3,
            friction:0.5,

            
            
        }
        this.body = Bodies.rectangle(x,y,width,height,hammerOptions);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        pos.x = mouseX;
        pos.y = mouseY;

       

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);


        pop();


    }
}