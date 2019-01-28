// makes sure canvas is correct size on page load
canvasResize();
// resizes canvas to fit on page resize
window.addEventListener("resize", canvasResize);
// controls canvas
function canvasResize() {
  // query selects canvas
  const canvas = document.querySelector("canvas");
  // makes canvas take up full window height and width
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // special canvas method
  const c = canvas.getContext("2d");

  // create OOP circle
  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // draws single circle
    this.draw = function() {
      let b = Math.floor(Math.random() * 255);
      // creates a circle or arc
      // start new shape with c.beginPath or the shapes will connect
      c.beginPath();
      // (x, y, radius, startAngle float, endAngle Float, drawCountClockWise)
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = "#a20021";
      c.fill();
    };
    // updates circles movement
    this.update = function() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.draw();
    };
  }

  // circle array
  const circleArray = [];
  // randomizes sizes and direction and velocity of circles
  for (let i = 0; i < 40; i++) {
    let radius = Math.random() * 10 - 5 + 20;
    let x =
      Math.floor(Math.random() * (window.innerWidth - radius * 2)) + radius;
    let y =
      Math.floor(Math.random() * (window.innerHeight - radius * 2)) + radius;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  // animates circles
  function animateCircle() {
    requestAnimationFrame(animateCircle);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  animateCircle();
}
