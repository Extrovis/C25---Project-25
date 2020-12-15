class Paper{
    constructor(x, y, r){
        var properties = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.r = r;

        this.body = Bodies.circle(x, y, this.r / 2,  properties);

        World.add(world, this.body);

        this.image = loadImage("Sprites/paperball.png");
    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        imageMode(CENTER);

        fill("white");
        image(this.image, 0, 0, this.r, this.r);  

        pop();

    }
}