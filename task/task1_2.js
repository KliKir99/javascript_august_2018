// JavaScript source code

function solve_task1_2() {


    const N = 23; // ������� ������

    var answer = true;

    for (var i = 2; i * i <= N; i++) {
        if (N % i == 0) answer = false;
    }

    console.log(answer);



}