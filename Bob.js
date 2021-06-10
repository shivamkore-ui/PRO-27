class Bob {
    constructor (x,y,r){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:0.1

        }
        this.body = Bodies.circle(x,y,r,options)
  
        World.add(world, this.body)
    }

    display(){
        circle(this.body.position.x, this.body.position.y, 50)
    }
}