class Hook{
    constructor(x,y){
        var options = {
            restitution :0,
            friction:1,
            density :1.2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius=20;
       // this.height = 40;
        this.image = loadImage("images/hook.png");
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(this.body.position.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}