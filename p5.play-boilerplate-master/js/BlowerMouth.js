class BlowerMouth{

    constructor(x,y,w,h){
        let option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.w=w
        this.h=h
        this.color=color
        World.add(world,this.body)

    }
    display(){

        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("blue")
        rect(0,0,this.w,this.y)
        pop()
    }

}