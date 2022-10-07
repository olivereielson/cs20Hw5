

function isFactor(factor,number){
    return number % factor === 0;
}
function arraySum(array){
    let sum = 0;
    array.forEach(function (item, index) {
        sum = sum + item;
    });
    return sum;
}


let p1 = parseInt(prompt("Number1"));
let p2 = parseInt(prompt("Number2"));


let f1 = [];
let f2 = [];




for (step = 1; step < p1; step++) {

    if (isFactor(step,p1)) {
        f1.push(step);
    }
}

for (let step = 1; step < p2; step++) {

    if (isFactor(step,p2)) {
        f2.push(step);
    }
}

let sum1 = arraySum(f1);
let sum2 = arraySum(f2);



if (sum2 === p1 && sum1===p2) {
    document.getElementById("boolVal").innerText = "True";
}else{
    document.getElementById("boolVal").innerText = "False";

}

