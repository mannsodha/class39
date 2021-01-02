class Form {

  constructor() {
    this.input = createInput("").attribute("playsfolder","name");
    this.button = createButton('Play');
    this.reset = createButton('reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.greet2 = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
     this.title.html("Car Racing Game");
     this.title.position(displayWidth/2 - 50, 0);
    
     this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
     this.button.position(displayWidth/2 + 30, displayHeight/2);
     this.reset.position(displayWidth - 100 , 100);
     this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
  }
  show(){
    this.greet2.html("your rank is:"+player.rank)
    this.greet2.position(displayWidth/2 - 70, displayHeight/4);
    this.reset.mousePressed(()=>{
      this.greet2.hide();
      game.update(0);
      player.updateCount(0);
      player.updaterank(0);
      database.ref("players").remove();
      clear();
      game.start();

  })
  }
}
