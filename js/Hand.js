class Hand{
    constructor(bodyA, bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 20
        }
        this.bodyB= bodyB;
        this,chain= constraint.create(options);
        World.add(world, this.hand);
    }
    fly(){
        this.hand.bodyA=body;
    }

    display(){
        if(this.hand.bodyA){
            var pointA= this.hand.bodyA.position;
            var pointB= this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}
