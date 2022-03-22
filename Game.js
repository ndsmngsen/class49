class Game{

constructor(){
    this.angle=0
    this.coinTouch=false;
    
}
getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    //add more and change values later
   bkground=createSprite(400,400,400,400)
   bkground.addImage(background_image);
    //walls(check where it starts and make invisible)
    topWall=createSprite(0,0,400,20)
    bottomWall=createSprite(0,400,400,20)
    rightWall=createSprite(400,0,20,400)
    leftWall=createSprite(0,0,20,400)

    //striker and red coin
    striker = createSprite(200,30,15,15);
    striker.addImage(striker_image);
    striker.scale= 0.4
    redCoin=createSprite(200,200,10,10)
    redCoin.addImage(redCoin_image)
    redCoin.scale=0.1
    // the turnmarker(make invisible)
    turnMarker=createSprite(200,30,10,10)
    //(invisible)

    //inner bar and outer bar(controls power)

    //holes(make invisible later)
    hole1=createSprite(0,0,10,10)
    hole2=createSprite(400,0,10,10)
    hole2=createSprite(0,400,10,10)
    hole2=createSprite(400,400,10,10)


    //black and white coins
    this.createBlackCoins()
    this.createWhiteCoins()

  }
handleElements(){
form.hide();
// might add more
}
play(){
  this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getWinConditions();
    player.getPlayerPoints();
    if (allPlayers !== undefined) {
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
      }
      // adding points
      
 
  //win conditions
  if (player.playerPoints=25) {
    gameState = 2;
    Player.updateWinConditions();
    player.update();
  }
  //space to release(do later)(release function)
  if(keyCode == 32){
    this.release()
    this.moveStrikerEachTurn()
  }
   
   //friction
    if(striker.velocityY>0){
     this.negFrictionY()
    }
    if(striker.velocityY<0){
      this.posFrictionY()
     }
     if(striker.velocityX<0){
      this.posFrictionX()
     }
     if(striker.velocityY>0){
      this.negFrictionX()
     }
     
    
     //when striker stops(add if black and white coin velocity === 0 later)
     if(striker.velocityX===0&&striker.velocityY===0
      &&redCoin.velocityX===0&&redCoin.velocityY===0){
       striker.y=turnMarker.y
     }
     //control conditions
if(player.positionY===turnMarker.y){
  this.handlePlayerControls()
  this.release()
}
//adjusting bar
if(turnMarker.y===30){
 //outer bar
outerBar.y = turnMarker.y - 10;
 //inner bar
 outerBar.y = turnMarker.y - 10;
}
if(turnMarker.y===370){
//outer bar
outerBar.y = turnMarker.y + 10;
//inner bar
innerBar.y = turnMarker.y + 10;
}
//conditions for coins falling



   drawSprites();
  }
}
handlePlayerControls(){
//rotation and changing angles(make angle number later)
if (keyIsDown(RIGHT_ARROW)) {
 angle += 4
 striker.rotate(angle)
}

if (keyIsDown(LEFT_ARROW)) {
  angle -= 4
  striker.rotate(angle)
}
//adjusting x position of striker
striker=World.mouseX
//adjusting power of the striker through the length of bar(outer bar height is 20)
if (keyIsDown(UP_ARROW)&&innerbar.height<20) {
  innerBar.height += 1;
}

if (keyIsDown(DOWN_ARROW)&&innerbar.height>0) {
  innerBar.height -= 1;
}
}
moveStrikerEachTurn(){
//move striker between players every turn(add if velocity of black coins and white coins is 0 too)
if(turnMarker.y===30&&this.coinTouch===false){
turnMarker.y=370
}
if(turnMarker.y===370&&this.coinTouch===false){
  turnMarker.y=30
}
}
release(){
if(innerBar.height=0){
  //striker.velocityY=1
  striker.velocityX=0.1||-0.1
} 
if(innerBar.height=1){
  striker.velocityY=2
  striker.velocityX=0.2||-0.2
} 
if(innerBar.height=2){
  striker.velocityY=3
  striker.velocityX=0.3||-0.3
} 
if(innerBar.height=3){
  striker.velocityY=4
  striker.velocityX=0.4||-0.4
} 
if(innerBar.height=4){
  striker.velocityY=5
  striker.velocityX=0.5||-0.5
} 
if(innerBar.height=5){
  striker.velocityY=6
  striker.velocityX=0.6||-0.6
} 
if(innerBar.height=6){
  striker.velocityY=7
  striker.velocityX=0.7||-0.7
} 
if(innerBar.height=7){
  striker.velocityY=8
  striker.velocityX=0.8||-0.8
} 
if(innerBar.height=8){
  striker.velocityY=9
  striker.velocityX=0.9||-0.9
} 
if(innerBar.height=9){
  striker.velocityY=10
  striker.velocityX=1||-1
} 
if(innerBar.height=10){
  striker.velocityY=11
  striker.velocityX=1.1||-1.1
} 
if(innerBar.height=11){
  striker.velocityY=12
  striker.velocityX=1.2||-1.2
} 
if(innerBar.height=12){
  striker.velocityY=13
  striker.velocityX=1.3||-1.3
} 
if(innerBar.height=13){
  striker.velocityY=14
  striker.velocityX=1.4||-1.4
} 
if(innerBar.height=14){
  striker.velocityY=15
  striker.velocityX=1.5||-1.5
} 
if(innerBar.height=15){
  striker.velocityY=16
  striker.velocityX=1.6||-1.6
} 
if(innerBar.height=16){
  striker.velocityY=17
  striker.velocityX=1.7||-1.7
} 
if(innerBar.height=17){
  striker.velocityY=18
  striker.velocityX=1.8||-1.8
} 
if(innerBar.height=18){
  striker.velocityY=19
  striker.velocityX=1.9||-1.9

} 
if(innerBar.height=19){
  striker.velocityY=20
  striker.velocityX=2||-2
} 
if(innerBar.height=20){
  striker.velocityY=21
  striker.velocityX=3||-3
} 


}

coinFall(){
// has coin fall in hole 


}
collectCoin(){
  //delete coin
}
getCoinsOnBoard(){
  //refer to player class
}
giveBlackpoints(){
//refering to player class 

}
giveWhitePoints(){
//refering to player class
}
displayScore(){

}

reset(){
//resets coins after round is done

}
negFrictionY(){
striker.velocityY+=0.1
}
posFrictionY(){
  striker.velocityY-=0.1
  }
  negFrictionX(){
    striker.velocityX-=0.1
  }
  posFrictionX(){
    striker.velocityX+=0.1
  }
  //bounce off white coins too
  createBlackCoins(){
  blackCoin1=createSprite(200,190,10,10)
  blackCoin1.addImage(blackCoin_image)
  blackCoin1.scale=0.15
  blackCoin1.bounceOff(bottomWall)
  blackCoin1.bounceOff(topWall)
  blackCoin1.bounceOff(rightWall)
  blackCoin1.bounceOff(leftWall)
  blackCoin1.bounceOff(striker)
  blackCoin1.bounceOff(redCoin)
  blackCoin2=createSprite(190,185,10,10)
  blackCoin2.addImage(blackCoin_image)
  blackCoin2.scale=0.15
  blackCoin2.bounceOff(bottomWall)
  blackCoin2.bounceOff(topWall)
  blackCoin2.bounceOff(rightWall)
  blackCoin2.bounceOff(leftWall)
  blackCoin2.bounceOff(striker)
  blackCoin2.bounceOff(redCoin)
  blackCoin3=createSprite(210,185,10,10)
  blackCoin3.addImage(blackCoin_image)
  blackCoin3.scale=0.15
  blackCoin3.bounceOff(bottomWall)
  blackCoin3.bounceOff(topWall)
  blackCoin3.bounceOff(rightWall)
  blackCoin3.bounceOff(leftWall)
  blackCoin3.bounceOff(striker)
  blackCoin3.bounceOff(redCoin)
  blackCoin4=createSprite(210,205,10,10)
  blackCoin4.addImage(blackCoin_image)
  blackCoin4.scale=0.15
  blackCoin4.bounceOff(bottomWall)
  blackCoin4.bounceOff(topWall)
  blackCoin4.bounceOff(rightWall)
  blackCoin4.bounceOff(leftWall)
  blackCoin4.bounceOff(striker)
  blackCoin4.bounceOff(redCoin)
  blackCoin5=createSprite(190,205,10,10)
  blackCoin5.addImage(blackCoin_image)
  blackCoin5.scale=0.15
  blackCoin5.bounceOff(bottomWall)
  blackCoin5.bounceOff(topWall)
  blackCoin5.bounceOff(rightWall)
  blackCoin5.bounceOff(leftWall)
  blackCoin5.bounceOff(striker)
  blackCoin5.bounceOff(redCoin)
  blackCoin6=createSprite(190,215,10,10)
  blackCoin6.addImage(blackCoin_image)
  blackCoin6.scale=0.15
  blackCoin6.bounceOff(bottomWall)
  blackCoin6.bounceOff(topWall)
  blackCoin6.bounceOff(rightWall)
  blackCoin6.bounceOff(leftWall)
  blackCoin6.bounceOff(striker)
  blackCoin6.bounceOff(redCoin)
  blackCoin7=createSprite(210,215,10,10)
  blackCoin7.addImage(blackCoin_image)
  blackCoin7.scale=0.15
  blackCoin7.bounceOff(bottomWall)
  blackCoin7.bounceOff(topWall)
  blackCoin7.bounceOff(rightWall)
  blackCoin7.bounceOff(leftWall)
  blackCoin7.bounceOff(striker)
  blackCoin7.bounceOff(redCoin)
  blackCoin8=createSprite(180,200,10,10)
  blackCoin8.addImage(blackCoin_image)
  blackCoin8.scale=0.15
  blackCoin8.bounceOff(bottomWall)
  blackCoin8.bounceOff(topWall)
  blackCoin8.bounceOff(rightWall)
  blackCoin8.bounceOff(leftWall)
  blackCoin8.bounceOff(striker)
  blackCoin8.bounceOff(redCoin)
  blackCoin9=createSprite(220,200,10,10)
  blackCoin9.addImage(blackCoin_image)
  blackCoin9.scale=0.15
  blackCoin9.bounceOff(bottomWall)
  blackCoin9.bounceOff(topWall)
  blackCoin9.bounceOff(rightWall)
  blackCoin9.bounceOff(leftWall)
  blackCoin9.bounceOff(striker)
  blackCoin9.bounceOff(redCoin)
  
  
  }
    createWhiteCoins(){
      whiteCoin1=createSprite(200,180,10,10)
      whiteCoin1.addImage(whiteCoin_image)
      whiteCoin1.scale=0.15
      whiteCoin1.bounceOff(bottomWall)
      whiteCoin1.bounceOff(topWall)
      whiteCoin1.bounceOff(rightWall)
      whiteCoin1.bounceOff(leftWall)
      whiteCoin1.bounceOff(striker)
      whiteCoin1.bounceOff(redCoin)
      whiteCoin2=createSprite(200,210,10,10)
      whiteCoin2.addImage(whiteCoin_image)
      whiteCoin2.scale=0.15
      whiteCoin2.bounceOff(bottomWall)
      whiteCoin2.bounceOff(topWall)
      whiteCoin2.bounceOff(rightWall)
      whiteCoin2.bounceOff(leftWall)
      whiteCoin2.bounceOff(striker)
      whiteCoin2.bounceOff(redCoin)
      whiteCoin3=createSprite(200,220,10,10)
      whiteCoin3.addImage(whiteCoin_image)
      whiteCoin3.scale=0.15
      whiteCoin3.bounceOff(bottomWall)
      whiteCoin3.bounceOff(topWall)
      whiteCoin3.bounceOff(rightWall)
      whiteCoin3.bounceOff(leftWall)
      whiteCoin3.bounceOff(striker)
      whiteCoin3.bounceOff(redCoin)
      whiteCoin4=createSprite(190,195,10,10)
      whiteCoin4.addImage(whiteCoin_image)
      whiteCoin4.scale=0.15
      whiteCoin4.bounceOff(bottomWall)
      whiteCoin4.bounceOff(topWall)
      whiteCoin4.bounceOff(rightWall)
      whiteCoin4.bounceOff(leftWall)
      whiteCoin4.bounceOff(striker)
      whiteCoin4.bounceOff(redCoin)
      whiteCoin5=createSprite(210,195,10,10)
      whiteCoin5.addImage(whiteCoin_image)
      whiteCoin5.scale=0.15
      whiteCoin5.bounceOff(bottomWall)
      whiteCoin5.bounceOff(topWall)
      whiteCoin5.bounceOff(rightWall)
      whiteCoin5.bounceOff(leftWall)
      whiteCoin5.bounceOff(striker)
      whiteCoin5.bounceOff(redCoin)
      whiteCoin6=createSprite(180,190,10,10)
      whiteCoin6.addImage(whiteCoin_image)
      whiteCoin6.scale=0.15
      whiteCoin6.bounceOff(bottomWall)
      whiteCoin6.bounceOff(topWall)
      whiteCoin6.bounceOff(rightWall)
      whiteCoin6.bounceOff(leftWall)
      whiteCoin6.bounceOff(striker)
      whiteCoin6.bounceOff(redCoin)
      whiteCoin7=createSprite(220,190,10,10)
      whiteCoin7.addImage(whiteCoin_image)
      whiteCoin7.scale=0.15
      whiteCoin7.bounceOff(bottomWall)
      whiteCoin7.bounceOff(topWall)
      whiteCoin7.bounceOff(rightWall)
      whiteCoin7.bounceOff(leftWall)
      whiteCoin7.bounceOff(striker)
      whiteCoin7.bounceOff(redCoin)
      whiteCoin8=createSprite(180,210,10,10)
      whiteCoin8.addImage(whiteCoin_image)
      whiteCoin8.scale=0.15
      whiteCoin8.bounceOff(bottomWall)
      whiteCoin8.bounceOff(topWall)
      whiteCoin8.bounceOff(rightWall)
      whiteCoin8.bounceOff(leftWall)
      whiteCoin8.bounceOff(striker)
      whiteCoin8.bounceOff(redCoin)
      whiteCoin9=createSprite(220,210,10,10)
      whiteCoin9.addImage(whiteCoin_image)
      whiteCoin9.scale=0.15
      whiteCoin9.bounceOff(bottomWall)
      whiteCoin9.bounceOff(topWall)
      whiteCoin9.bounceOff(rightWall)
      whiteCoin9.bounceOff(leftWall)
      whiteCoin9.bounceOff(striker)
      whiteCoin9.bounceOff(redCoin)
     
    }



restart(){
  //restarts the entire game

}
}