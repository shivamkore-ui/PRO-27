class Rope {
    constructor(bodyA, bodyB){
        
        var options = {
            length :300,
            stiffness: 5,
            bodyA:bodyA,
            bodyB:bodyB
          }

        this.rope = Matter.Constraint.create(options)
        World.add(world, this.rope)
    }

    display(){
        line(bodyA.position.x,bodyA.position.y, bodyB.position.x,bodyB.position.y)
    
    }
}
