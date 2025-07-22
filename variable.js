//var variable
function testvar() {
    var x = 10;
    if (true) {
        var x = 20; // same variable
        console.log(x); // 20
    }
    console.log(x); // 20
}

//let variable
function testlet() {
    let y = 10;
    if (true) {
        let y = 20; // different variable
        console.log(y); // 20
    }
    console.log(y); // 10
}
testlet();

//const variable
function testconst() {
    const z = 10;
    if (true) {
         const z = 20; 
        console.log(z); // 10
    }
    console.log(z); // 10
}
testconst();