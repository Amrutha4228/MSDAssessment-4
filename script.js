document.getElementById('generateButton').addEventListener('click', generateRandomNumber);

function generateRandomNumber() {
    const min = parseInt(document.getElementById('minValue').value);
    const max = parseInt(document.getElementById('maxValue').value);
    const resultElement = document.getElementById('result');

    if (isNaN(min) || isNaN(max)) {
        resultElement.textContent = 'Please enter valid numbers for both fields.';
    } else if (min > max) {
        resultElement.textContent = 'The minimum value should be less than or equal to the maximum value.';
    } else {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultElement.textContent = `Random Number: ${randomNumber}`;
    }
}
