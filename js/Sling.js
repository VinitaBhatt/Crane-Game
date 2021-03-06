class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 100
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x, pointB.y);
        }
    }

    fly(){
        console.log("in fly()");
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}