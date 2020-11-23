// In this function I am performing the whole calculation
function bmiOperation() {
    //height input variable
    let height = document.getElementById('height').value;
    //weight input variable
    let weight = document.getElementById('weight').value;

    let constant = 703;


    let realWeight = Math.pow(height, 2);

    let result = constant * weight/realWeight;

    console.log(result)

}

