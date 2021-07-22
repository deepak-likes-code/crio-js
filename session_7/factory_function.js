

function createCar(make, model, color = "Black") {
  return {
    make, //make: make
    model,
    color,
    start: function () {
      console.log("Car Start");
    },
  };
}

const myCar = createCar("Audi","Q3");
console.log(myCar.make,myCar.model, myCar.color);