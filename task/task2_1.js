// JavaScript source code

function solve_task2_1() {



    const A = [1, -2, 3, -4, 5]; // входной массив

    var B = [];
    var C = [];

    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) B.push(A[i]); else if (A[i] < 0) C.push(A[i]);
    }

    console.log("mass B:");
    for (var i = 0; i < B.length; i++) console.log(B[i]);


    console.log("mass C:");
    for (var i = 0; i < C.length; i++) console.log(C[i]);

}