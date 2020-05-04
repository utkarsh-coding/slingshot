const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var slingshot, shot;
var gameState = "onSling"

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(150,305,300,170);
    ground = new Ground(600,height,1200,20);
    snowball = new Snowball(200,50);

}

function draw(){
    background(rgb(81, 128, 204));

    Engine.update(engine);

    ground.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(snowball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       slingshot.attach(bird.body);
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x: 200, y: 50});
       
    }
}