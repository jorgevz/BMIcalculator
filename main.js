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


const bmi = finalResult

if ( bmi < 18.5) {
    document.getElementById('advice').innerHTML = ranges[0]
} else if ( bmi < 24.9) {
    document.getElementById('advice').innerHTML = ranges[1]
} else if ( bmi < 29.9) {
    document.getElementById('advice').innerHTML = ranges[2]
} else if ( bmi >= 30) {
    document.getElementById('advice').innerHTML = ranges[3]
}

};

//BMI advice statements

const ranges = ["You need to eat more !", 
"You are healthy !", "You are overweight", "You are obese"  ]

