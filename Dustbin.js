class Dustbin{
    constructor(x, y){
        var properties = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, 200, 20, properties);

        World.add(world, this.body);

        this.image = loadImage("Sprites/dustbin.png");

    }

    display(){
        var dustbinPos = this.body.position;

        push();

        translate(dustbinPos.x, dustbinPos.y);

        imageMode(CENTER);

        image(this.image, 0, 0, 150, 200);

        pop();
    }
}