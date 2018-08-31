// JavaScript source code

function solve_task1_4() {


    const N = 230987; // входные данные
    var N1 = N;

    function div(a, b) {
        return (a - a % b) / b;
    }

    var answer = 0;

    while (N1 != 0) {
        answer = answer * 10 + (N1 % 10);
        N1 = div(N1, 10);
    }

    console.log(answer);


}