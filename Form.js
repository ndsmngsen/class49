class Form{

    constructor(){
        this.playButton = createButton("Play"); 
       this.input = createInput("").attribute("placeholder", "Enter Name Here");
       this.greeting =  createElement("h2");
    }
    setElementsPosition(){
        this.input.position(200,200);
        this.playButton.position(200,220);
        this.greeting.position(200,240);
    }
    setElementsStyle(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }
    hide(){
    this.playButton.hide();
    this.input.hide();
    this.greeting.hide();
    }
    handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          player.getDistance();
        });
      }
     display(){
     this.setElementsPosition();
     this.setElementsStyle()
     this.handleMousePressed();
     }

    }