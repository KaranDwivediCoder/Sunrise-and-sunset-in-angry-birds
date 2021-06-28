class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,60,60);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[]
  }

  display() {
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      this.trajectory.push([this.body.position.x,this.body.position.y])
    }
    for(var i=0;i<this.trajectory.length;i++){
      ellipse(this.trajectory[i][0],this.trajectory[i][1],10,10);
    }
  }
}
