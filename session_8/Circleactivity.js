// function createCircle() {
//     const newCircle = {
//       radius: 1,
//       location: {
//         x: 1,
//         y: 1,
//       },
//       draw: function () {
//         //this ----> newCircle
//         console.log(`${this.location.x}, ${this.location.y}`);
//       },
//       move: function (nextX, nextY) {
//         this.location = {
//           x: nextX,
//           y: nextY,
//         };
//       },
//     };

//     return newCircle;
//   }

function CreateCircle(radius, x = 0, y = 0) {
  this.radius = radius;
  this.location = {
    x,
    y,
  };

  this.move = function (nextX, nextY) {
    this.location = {
      x: nextX,
      y: nextY,
    };
  };

  this.draw = function () {
    //this ----> newCircle
    console.log(`${this.location.x}, ${this.location.y}`);
  };
}

// const circle1 = new CreateCircle(1, 0, 0);

// for (let i = 0; i < 11; i++) {
//   circle1.move(i, i);
//   circle1.draw();
// }
let circle2 = new CreateCircle(10, 4, 1);

CreateCircle.prototype.reset = function () {
  this.radius = 1;
  this.location = {
    x: 1,
    y: 1,
  };
};
console.log(circle2);
circle2.reset();
console.log(circle2);
