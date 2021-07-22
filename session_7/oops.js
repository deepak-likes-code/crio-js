const person = {
  name: "Dhruv",
  grades: {
    subject1: "A",
    subject2: "A+",
  },
  printName: function() {
      console.log("Print some name")
  }
};

console.log(person.printName);
console.log(person.printName());