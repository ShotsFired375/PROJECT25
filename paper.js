class paper{
    constructor (x, y, diameter) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.image= loadImage("paperp.png");
        this.diameter = 70;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("grey");
        //stroke("grey");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 80, 80);
        //ellipse(pos.x, pos.y, this.diameter);
    }

}