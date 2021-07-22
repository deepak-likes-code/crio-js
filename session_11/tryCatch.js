try {
    let after = "123";
    console.log(after);
    myVar;
  } catch {
    console.log("Some unexpeted error occured"); //So this executes
  } finally {
    console.log("Finally this will print always");
  }
  
  console.log("Hello After Trying");