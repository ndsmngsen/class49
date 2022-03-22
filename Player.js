class Player{

    constructor(){
        
        this.PlayerPoints = 0;
        this.name = null;
        this.index = null;
        this.positionX=0;
        this.positionY=0;
     }
      addPlayers() {
        var playerIndex = "players/player" + this.index;
        if (this.index === 1) {
         this.positionY=30
        } else {
          this.positionY=370
        }
        database.ref(playerIndex).set({
          name: this.name,
          playerPoints: this.playerPoints
        });
      }
      getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
      }
     updateCount(){
      database.ref("/").update({
        playerCount: count
      });
     }
     update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({ 
          gameState: state
          
        });
      }
    
      static getPlayersInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
          allPlayers = data.val();
        });
      }
      //win condition is first to 25 points
      getPlayerPoints() {
        database.ref("playerPoints").on("value", data => {
          this.coinsOnBoard = data.val();
        });
      }
    
      static updatePlayerPoints() {
        database.ref("/").update({
          playerPoints: coinsOnBoard
        });
      }
    
      getWinConditions() {
        database.ref("firstToWin").on("value", data => {
          this.playerPoints = data.val();
        });
      }
    
      static updateWinConditions() {
        database.ref("/").update({
          firstToWin: playerPoints
        });
      }
    }
    
    