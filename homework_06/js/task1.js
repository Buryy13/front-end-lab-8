var a, b, c;
var p, square, type;

a = Number(prompt("Input length of first side:"));
b = Number(prompt("Input length of second side:"));
c = Number(prompt("Input length of third side:"));

var arr = [a, b, c];
arr = arr.sort(function(a, b) {
    return a > b;
});

if (a > 0 && b > 0 && c > 0 && arr[2] < (arr[0] + arr[1])) {
    p = (a + b + c) / 2;
    if (arr[2] * arr[2] === (arr[0] * arr[0] + arr[1] * arr[1]))
        type = "right triangle";
    else if (a === b && b === c && a === c)
        type = "equilateral";
    else if (a === b || a === c || b === c)
        type = "isosceles";
    else
        type = "scalene";
    square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    if ((square ^ 0) === square)
        console.log("Type of triangle is " + type + " and sqaure is " + square);
    else {
        console.log("Type of triangle is " + type + " and sqaure is " + square.toFixed(2));
    }
} else {
    console.log("Incorrect data");
}