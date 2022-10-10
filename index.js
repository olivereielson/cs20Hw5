//This function checks if a number is a factor and returns true or false. 
function isFactor(factor, number) {
    return number % factor === 0;
}

//this function returns the sum of a given array.
function arraySum(array) {
    let sum = 0;
    array.forEach(function (item) {
        sum = sum + item;
    });
    return sum;
}

//Main driver function that is called when the user clicks submit. 
function run() {

    //get data from the form
    const formData = new FormData(document.querySelector("form"));

    //get two numbers out of form
    let p1 = parseInt(formData.get("p1"));
    let p2 = parseInt(formData.get("p2"));

    //create factor variables
    let f1 = [];
    let f2 = [];


    //Find factors for number 1
    for (let step = 1; step < p1; step++) {

        if (isFactor(step, p1)) {
            f1.push(step);
        }
    }
    //Find factors for number 2
    for (let step = 1; step < p2; step++) {

        if (isFactor(step, p2)) {
            f2.push(step);
        }
    }

    //get the sum
    let sum1 = arraySum(f1);
    let sum2 = arraySum(f2);


    //check if amicable and if so then push to screen
    if (sum2 === p1 && sum1 === p2) {
        document.getElementById("amicable").innerText = "The numbers: " + p1 + " and " + p2 + " are amicable";
    } else {
        document.getElementById("amicable").innerText = "The numbers:  " + p1 + " and " + p2 + " are not amicable";
    }

    //push remaining data to screen
    document.getElementById("f1").innerText = f1.toString();
    document.getElementById("f2").innerText = f2.toString();
    document.getElementById("p1").innerText = p1.toString();
    document.getElementById("p2").innerText = p2.toString();


}




