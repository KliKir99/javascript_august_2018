// JavaScript source code

function solve_task2_2() {


    const A = [1, 2, 1, 2, 3.14, 4, 2, 1]; // входной массив

    var count = []; // количество повторений

    for (var i = 0; i < A.length; i++) count.push(0);

    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (A[i] == A[j]) {
                count[j]++;
                break;
            }
        }
    }

    for (var i = 0; i < A.length; i++)
    {
        if (count[i] != 0)
        {
            console.log(String(A[i]) + " - " + String(count[i]));
        }
    }



}


