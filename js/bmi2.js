const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // convert cm to m

    if (weight && height) {
        const bmi = weight / (height * height);
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        resultDiv.innerHTML = 'Please enter your weight and height.';
    }
});