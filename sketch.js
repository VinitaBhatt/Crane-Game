
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling;



function preload() {
    backgroundImg = loadImage("images/background.gif");
    craneImg = loadImage("images/crane.png");
    hookImg = loadImage("images/hook.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    //crane = Bodies.rectangle(200,200,20,20);
    //World.add(world,crane.body);
    
     crane = createSprite(1000,280,20,20);
     crane.addImage(craneImg);
     crane.scale=0.5;

    hook = new Hook(100,150);
   

    sling = new Sling(hook.body,{x:crane.x-100,y:crane.y-100});
    
}

function draw(){
    background(255);
    image(backgroundImg, 0, 0, width, height);

    Engine.update(engine);

   // image(hookImg,hook.body.position.x,hook.body.position.y,50,50);
    //rect(hook.position.x,hook.position.y,50,50);

    sling.display();
    hook.display();
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(hook.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
    slingshot.fly();
}*/

function keyPressed(){
    /*if(keyCode === 32){
        slingshot.attach(eclair.body);
    }*/

    if(keyCode === 37){
        console.log("left");
        crane.x = crane.x-5;
        hook.pointB = { x: crane.x-100, y: crane.y-100 };
    }

    if(keyCode === 39){
        console.log("left");
        crane.x = crane.x+5;
    }
}