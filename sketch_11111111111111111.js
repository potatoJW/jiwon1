function setup() {
size(600,600);

  

  //background

  noStroke();

  fill(50);

  quad(-1,height,width,height,width,height-100,-1,height-100);

  

  //sky

  for(int i=0; i<height-100; i++){

    stroke(i/2,i/5,i/13);

    line(0,i,width,i);

  }
}

function draw() {
   //man

  stroke(50);

  ellipse(500,450,30,30);

  quad(480,463,520,463,520,500,480,500);

  

  //firework green1

  stroke(247,240,85);

  line(80,80,random(50,110),random(10,150));

  line(80,80,random(30,130),random(30,130));

  line(80,80,random(10,150),random(50,110));

  

  //firework green2

  stroke(154,250,164);

  line(400,200,random(320,480),random(120,280));

  line(400,200,random(350,450),random(90,310));

  line(400,200,random(290,510),random(150,250));

  

  //firework green3

  stroke(20,54,216);

  line(150,350,random(90,210),random(290,410));

  line(150,350,random(110,190),random(250,450));

  line(150,350,random(50,250),random(310,390));
}