class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        
       

        this.bodyA=bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA=body;
        strokeWeight(2);
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        } 
            
    }
   
}