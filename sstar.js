var stars=[];
var speed;


function setup(){
	createCanvas(600,600);
	for(var i=0 ; i<800;i++){
		stars[i]=new star();

	}
}


function draw(){
	speed = map(mouseX,0,width,0,50);
background(0);
translate(width/2,height/2);
for(var i=0;i<stars.length;i++){
	stars[i].update();
	stars[i].show();

}
}