var oldMouse = {x: 0, y: 0}; //store the position of the mouse at the beginning
var catImg = document.getElementById("catImg");


setInterval(timestep, 30);

document.getElementById("canvas").onmousedown = event=>{

	oldMouse = scaleCoordsToCanv(event.clientX, event.clientY);
}

document.getElementById("canvas").onmouseup = event=>{
	var newMouse = scaleCoordsToCanv(event.clientX, event.clientY);

	var nextCat = new MovingObject({
		x: oldMouse.x, 
		y: oldMouse.y, 
		xSp: (oldMouse.x-newMouse.x)/5, //move in the direction
		ySp: (oldMouse.y-newMouse.y)/5, //move in the direction
		size: 50, 
		rotSp: Math.random()*50-25,
		bounciness: 0.8
	});
}


MovingObject.prototype.draw = function(){
	var randness = this.size/10;

	ctx.save();

	ctx.translate(this.x, this.y);
	ctx.rotate(this.rotation*Math.PI/180); // convert to radians
	ctx.drawImage(
		catImg, // image
		-this.size/2, // x position
		-this.size/2, // y position
		this.size, // width
		this.size // height
	);

	ctx.restore();
}


new Diag(70,200,170,120);
new Diag(170,120,210,200);
new Diag(210,200,70,200);
new Diag(470,380,630,140);
new Diag(630,140,770,470);
new Diag(770,470,660,560);
new Diag(660,560,470,380);
new Diag(80,510,120,650);
new Diag(120,650,280,640);
new Diag(280,640,80,510);
new Diag(810,700,800,610);
new Diag(800,610,900,600);
new Diag(900,600,920,690);
new Diag(920,690,810,700);
new Diag(390,690,460,580);
new Diag(460,580,560,690);
new Diag(560,690,390,690);
new Diag(780,110,800,210);
new Diag(800,210,870,210);
new Diag(870,210,930,110);
new Diag(930,110,870,10);
new Diag(870,10,780,110);
new Diag(170,350,270,310);
new Diag(270,310,300,390);
new Diag(300,390,50,410);
new Diag(50,410,170,350);
new Diag(330,100,380,220);
new Diag(380,220,490,190);
new Diag(490,190,330,100);
new Diag(170,780,320,700);
new Diag(320,700,460,790);
new Diag(460,790,170,780);