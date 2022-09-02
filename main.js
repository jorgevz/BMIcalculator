//variables used declared before function.
let feet,inches,constant,weight, realHeight, result, finalHeight, finalResult;

// In this function I am performing the whole calculation

const bmiOperation = () => {


    //height (feet) input variable
     feet = document.getElementById('feet').value;

     inches = document.getElementById('inches').value;

     finalHeight = feet*12 + +inches;

    // weight input variable
     weight = document.getElementById('weight').value;

     constant = 703;

     realHeight = Math.pow(finalHeight, 2);

     result = (constant * weight/realHeight) ;

    // rounded with *10/10 to show first decimal of the final result.
     finalResult = Math.round(result*10)/10;



    //  console.log(finalResult)

     document.getElementById('result').innerHTML = finalResult


const bmi = finalResult

    if ( bmi <= 18.5 ) {
        document.getElementById('advice').innerHTML = ranges[0]
        } else if ( bmi <= 24.9) {
        document.getElementById('advice').innerHTML = ranges[1]
        } else if ( bmi <= 29.9) {
        document.getElementById('advice').innerHTML = ranges[2]
        } else if ( bmi <= 100) {
        document.getElementById('advice').innerHTML = ranges[3];
        } else if (bmi !== Number);{
        document.getElementById('result').innerHTML = errorMessages[0];
        document.getElementById('advice').innerHTML = '';
    }  

//Values can't be zero or negative integers
    if (bmi <= 0) {
        document.getElementById('result').innerHTML = errorMessages[1];
        document.getElementById('advice').innerHTML = '' 
    }

}
//BMI advice statements

const ranges = ["You are underweight. Reach out to a health proffesional to discuss more about your nutrition habits.", 
"You are healthy, your BMI stands in a good position. Keep your good diet and exercise habits up.",
 "You are overweight. Try to stick to better eating habits and exercises to reduce your BMI.", 
 "You are obese. Reach out to a health proffesional to discuss more about how to reduce your BMI. " ]

const errorMessages = ["Please enter your information correctly.",
" Something was wrong with your inputs. Try again." ]




