
function convert() {
    // Get the input value and selected unit type
    const inputValue = document.getElementById('inputValue').value;
    const unitType = document.getElementById('unitType').value;
    let result = 0;

    // Perform conversion based on selected unit type
    if (unitType === "length") {
        result = inputValue * 3.28084; // Meters to feet conversion
        document.getElementById('result').innerHTML = `${inputValue} meters = ${result.toFixed(2)} feet`;
    } else if (unitType === "weight") {
        result = inputValue * 2.20462; // Kilograms to pounds conversion
        document.getElementById('result').innerHTML = `${inputValue} kg = ${result.toFixed(2)} pounds`;
    } else if (unitType === "temperature") {
        result = (inputValue * 9/5) + 32; // Celsius to Fahrenheit conversion
        document.getElementById('result').innerHTML = `${inputValue}°C = ${result.toFixed(2)}°F`;
    } else {
        document.getElementById('result').innerHTML = "Please select a unit type";
    }
}
