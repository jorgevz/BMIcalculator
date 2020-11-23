
function bmiOperation() {
    let height = document.getElementById('height').value;

    let weight = document.getElementById('weight').value;

    let constant = 703;

    let realw = Math.pow(height, 2);

    let result = constant * weight/realw;

    console.log(result)

}

