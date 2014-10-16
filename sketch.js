function setup() {
  createCanvas(800,800);
}

function draw()
{
		background(0);
		fill(255);
		ellipse(mouseX, mouseY, 100, 100);

		drawDonut(110,60,120,100,100);
		drawDonut(140,50,90,300,100);
		drawDonut(170,40,60,400,200);
		drawDonut(200,30,30,500,300);
}

function drawDonut(r,g,b,x,y)
{
		//doughnut #1
		fill(r,g,b);
		ellipse(x,y,200,200);
		fill(0);
		ellipse(x,y,120,120);
}

		//doughnut #2
		fill(255);
		ellipse(100,200,200,200);
		fill(0);
		ellipse(100,200,120,120);

		//doughnut #3
		fill(255);
		ellipse(200,400,200,200);
		fill(0);
		ellipse(200,400,120,120);

