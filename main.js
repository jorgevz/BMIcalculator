
function bmiOperation() {
    let height = document.getElementById('height').value;

    let weight = document.getElementById('weight').value;

    let constant = 703;

    let result = constant * weight/height;

    console.log(result)

}

