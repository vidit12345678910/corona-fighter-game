class Walls{
  constructor(x,y,width,height){
    var options ={
      isStatic:true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);

    //this.width = width;
    //this.height = height;

    World.add(world,this.body);

  }

  show(){
    var pos = this.body.position;
    strokeWeight(5);
    stroke("white");
    rectMode(CENTER);
    rect(pos.x,pos.y,width,height);
  }
}