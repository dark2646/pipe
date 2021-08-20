class Ball{

    constructor(x,y,w,h){
        let option={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.w=w
        this.h=h
        World.add(world,this.body)

    }
    display(){

        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.w,this.y)
        pop()
    }

}