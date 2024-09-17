function setup() {
    createCanvas(800, 800);
    background("#C513E4");
  }
  
  function draw() {
    stroke("black");
    fill("pink");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20)
    }
      }