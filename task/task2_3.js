// JavaScript source code

function annagram(str1, str2)
{

    if (str1.length != str2.length) return false;

    var symbols1 = [];
    var symbols2 = [];

    for (var i = 0; i < str1.length; i++) symbols1.push(str1[i]);
    for (var i = 0; i < str2.length; i++) symbols2.push(str2[i]);

    symbols1.sort();
    symbols2.sort();

    var ans = true;
    for (var i = 0; i < str1.length; i++) if (symbols1[i] != symbols2[i]) ans = false;

    return ans;
}


