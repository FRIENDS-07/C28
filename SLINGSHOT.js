class Slingshot{

    constructor(bodya,pointb){

        var options = {
            bodyA : bodya,
            pointB : pointb,
            stiffness : 1,
            length : 50
          }
        
        this.pointB = pointb;

        this.body = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world,this.body);

    }

    fly(){
        this.body.bodyA = null;
    }

    display(){

        image(this.image1,205,93);
        image(this.image2,175,90);

        if(this.body.bodyA){

            strokeWeight(2);
            stroke("red"); 
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);

        }

    }

}