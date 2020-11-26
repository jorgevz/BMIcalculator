// In this function I am performing the whole calculation
function bmiOperation() {


    //height (feet) input variable
    let feet = document.getElementById('feet').value* 12/10;

    let inches = document.getElementById('inches').value;

    let finalHeight = feet + inches

    // weight input variable
    let weight = document.getElementById('weight').value;

    let constant = 703;

    let realHeight = Math.pow(finalHeight, 2);

    let result = constant * weight/realHeight;

    // rounded with *10/10 to show first decimal of the final result.
   let finalResult = Math.round(result * 10)/10

   console.log(finalResult)

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
"You are healthy !", "You are overweight", "You are obese"  ];