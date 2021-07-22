let loc = "fooGlobal"; //global

function myTest() {
  let loc = "foo"; //local
  console.log(loc); //accessing local (precedence)
}

myTest();
console.log(loc); //accessing global