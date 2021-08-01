class ComputerArcher{

constructor(x,y,w,h) {
    var options={
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    this.width = width 
    this.height = height
    this.image = loadImage("./assets/computerArcher.png")
    World.add(world,this.body)

    Matter.Body.setAngle(this.body,-PI/2);
}

display() {

   

    /*if(move === "UP" && computerArcher.body.angle < 1.77){
        angleValue = 0.1;
    }else{
        angleValue = -0.1;
    }
   
    if(move === "DOWN" && computerArcher.body.angle > 1.47){
        angleValue = -0.1;
    }else{
        angleValue = 0.1
    }*/

    var pos = this.body.position
    var angle = this.body.angle

    push();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)

    pop();
}












}