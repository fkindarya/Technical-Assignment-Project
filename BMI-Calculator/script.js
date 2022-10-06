let weightInput = document.querySelector("#weight")
let heightInput = document.querySelector("#height")
let buttonCalculate = document.querySelector("#calculate")
let paragraphResult = document.querySelector("#result-BMI")

buttonCalculate.addEventListener("click", () => {
    let weight = weightInput.value
    let height = heightInput.value
    let result = weight / (height / 100)**2

    if (result <= 18.5){
        paragraphResult.innerHTML = `Your BMI is ${result.toFixed(1)} which means You are Underweight`
    } else if (result <= 24.9){
        paragraphResult.innerHTML = `Your BMI is ${result.toFixed(1)} which means You are Normal Weight`
    } else if(result <= 29.9){
        paragraphResult.innerHTML = `Your BMI is ${result.toFixed(1)} which means You are Overweight`
    } else if (result >= 30){
        paragraphResult.innerHTML = `Your BMI is ${result.toFixed(1)} which means You are Obesity`
    } else {
        paragraphResult.innerHTML = "Input your weight and height"
    }
});