// JavaScript source code

function solve_task1_1() {


    const A = 1.0; // входные данные
    const B = -5.0;
    const C = 6.0;

    var discr = B * B - 4 * A * C;


    if (discr < 0) {
        console.log("no routes");
    }
    else if (discr == 0) {
        var root = -1 * B / (2 * A);
        console.log("one root: " + root);
    }
    else {
        var root1 = -1 * B + Math.sqrt(discr);
        root1 = root1 / (2 * A);

        var root2 = -1 * B - Math.sqrt(discr);
        root2 = root2 / (2 * A);


        console.log("two routes:");
        console.log("root #1: " + root1);
        console.log("root #2: " + root2);
    }


}