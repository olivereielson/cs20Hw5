let p1 = parseInt(prompt("Number1"));
let p2 = parseInt(prompt("Number2"));

//p1 = 220;
//p2 = 284;

let f1 = [];
let f2 = [];

let sum1 = 0;
let sum2 = 0;


for (step = 1; step < p1; step++) {

    if (p1 % step === 0) {
        f1.push(step);
    }
}

f1.forEach(function (item, index) {
    sum1 = sum1 + item;
});


for (step = 1; step < p2; step++) {

    if (p2 % step === 0) {
        f2.push(step);
    }
}
f2.forEach(function (item, index) {
    sum2 = sum2 + item;
});


if (sum2 === p1 && sum1===p2) {
    document.getElementById("boolVal").innerText = "True";
}else{
    document.getElementById("boolVal").innerText = "False";

}

