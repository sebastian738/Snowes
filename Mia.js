class Mia {
    

        constructor(x,y,r)
        {
        // assign options to the rubber ball
        var options = {
            'restitution':1,
            'friction':5.0,
            'density':1.1
        }
            this.x=x;
            this.y=y;
            this.r=r
            this.image = loadImage("snow4.webp")
            this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
            
            World.add(world, this.body);
    
        }
        display()
        {
                var rubberpos=this.body.position;	
               
                
                push()
                translate(rubberpos.x, rubberpos.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("white");
                fill("white");
               
                
                //draw the ellipse here to display the rubber ball
                ellipse(0,0,this.r, this.r)
                image(this.image, -50,-50,this.r*2, this.r*2)
    
                pop()
        }
    
    }
