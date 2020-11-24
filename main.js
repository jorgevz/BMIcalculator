// In this function I am performing the whole calculation
function bmiOperation() {
    //height input variable
    let height = document.getElementById('height').value;
    //weight input variable
    let weight = document.getElementById('weight').value;

    let constant = 703;

    let realWeight = Math.pow(height, 2);

    let result = constant * weight/realWeight;

    //rounded with *10/10 to show first decimal of the final result.
   let finalResult = Math.round(result * 10)/10

    document.getElementById('result').innerHTML = finalResult

let firstrange = "You need to eat more !"

const first = finalResult

if ( first < 18.5) {
    document.getElementById('advice').innerHTML = firstrange
}

};

