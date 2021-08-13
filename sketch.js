var s1,s2,s1img,s2img;
function setup() {
  createCanvas(800,800);
  s1 = createSprite(600,200,50,50);
  s1.addImage("snow",s1img);
  s1.scale = 0.5;
  s2 = createSprite(800,200,50,50);
  s2.addImage("snow",s2img);
  s2.scale = 0.5;
}
var img = "snow2.jpg"
function preload(){
  getBackgroundImg();
  s1img = loadImage("snow4.webp");
  s2img = loadImage("snow5.webp");
}
function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  drawSprites();
}
function getBackgroundImg(){
  backgroundImg = loadImage(img);
}