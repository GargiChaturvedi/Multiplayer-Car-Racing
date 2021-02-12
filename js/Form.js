class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      this.reset = createButton("Reset(only for dev)");
    }
    
    hide() {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
    
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position((width/2)-70, 0);
     
      this.input.position((width/2)-70, (height/2)-40);
      this.button.position((width/2)+50, height/2);
      this.reset.position(width-80, 30);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
       
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
    
        this.greeting.html("Hello " + player.name);
        this.greeting.position((width/2)-70, (height/2)-40);
      });
    
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
    }
  }
  
  