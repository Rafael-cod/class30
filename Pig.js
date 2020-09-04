class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //it imply that the pig is fully visible
    //255 = ON
    //0 = OFF
    this.visibility = 255;
    this.image = loadImage("sprites/enemy.png");
  }

  display(){
    //console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};