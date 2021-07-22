// const fn = () => {
//     const message = "\n👨 I am from parent";
//     function child1() {
//         console.log(message, "👧 Called from child 1️⃣");
//     }

//     function child2() {
//         const message = "Child Message";
//         console.log(message, "Called from child 2️⃣\n");
//     }

//     child1();
//     child2();
// }

// fn()

function parentFunction() {
    //Lexical Scope of childFunction() START
    const message = "Hi! I'm a message from parent 👋";

    function childFunction() {
        console.log(message);
    }

    return childFunction;
    //Lexical Scope of childFunction() END
}

const ans = parentFunction();
ans();