//Create variables here
var dog;
var dogImg;
var happyDog;
var happyDogImg;
var database;
var foodS;
var foodstock;

function preload(){
  //load images here
 dogImg = loadImage("dogImg.png")
 happyDogImg = loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  //console.log(database);
  foodstock = database.ref("Food");
  foodstock.on("value",readStock);

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;

   /*happyDog = createSprite(250,250);
   happyDog.addImage(happyDogImg);
   happyDog.scale = 0.2;*/


  
}


function draw() {  
 background(46, 139, 87);
textSize(30);
fill(0);
stroke ("yellow");
text("Press up arrow to feed the pup!",45,60);


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
 }

  
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining: "+foodS,135,170);


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
    
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x

  }) 
}

//Maam do we have to write this?
//  Refer to this link for the doubt:
//https://curriculum-project-images.s3.ap-south-1.amazonaws.com/PRO/C348.PNG
