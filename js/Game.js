class Game {
    constructor(){}
   
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
      }
      car1 = createSprite(100, 200);
      car1.addImage("car1", car1Img);
      car2 = createSprite(300, 200);
      car2.addImage("car2", car2Img);
      car3 = createSprite(500, 200);
      car3.addImage("car3", car3Img);
      car4 = createSprite(700, 200);
      car4.addImage("car4", car4Img);
      cars = [car1, car2, car3, car4];
    }

    play() {
      form.hide();
      textSize(30);
      text("Game Start!", 120, 100);
      Player.getPlayerInfo();
      if(allPlayers !== undefined) {
        //var display_position = 130;
        background("#C68767");
        image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);
        var index = 0;
        var x = 150;
        var y = 0;
        for(var plr in allPlayers) {
         index = index+1;
         x = x+200;
         y = displayHeight-allPlayers[plr].distance;
         //console.log("displayHeight: " + displayHeight);
         //console.log("distance: " + allPlayers[plr].distance);
         cars[index-1].x = x;
         cars[index-1].y = y;
         console.log("y: " + cars[index-1].y);
         if(index === player.index) {
           strokeWeight(5);
           stroke("yellow");
           fill("red");
           ellipse(x, y, 80, 80);
           camera.position.x = displayWidth/2;
           camera.position.y = cars[index-1].y;
         }
      }
      if(keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance += 50;
        player.update();
      }

      if(player.distance > 3600) {
        gameState = 2;
      }
      drawSprites(); 
    }
  }

  end() {
    console.log("Game ended");
    car1.setVelocity(0, 0);
    car2.setVelocity(0, 0);
    car3.setVelocity(0, 0);
    car4.setVelocity(0, 0);
  }
}