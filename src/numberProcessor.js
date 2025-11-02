const fs = require('fs');

// Helper: Read numbers from a file (one number per line)
function readNumbersFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').filter(line => line.trim() !== ''); // remove empty lines
    return lines.map(Number);
}

// Calculate the sum of numbers
function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Find the highest number
function maxNumber(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Find the lowest number
function minNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Calculate the average
function average(numbers) {
    if (numbers.length === 0) return 0; // avoid division by zero
    return sumNumbers(numbers) / numbers.length;
}

// --- Verification code at the bottom ---
const sampleNumbers = readNumbersFromFile('./data/sample-numbers.txt');

console.log("Numbers from file:", sampleNumbers);
console.log("Sum:", sumNumbers(sampleNumbers));
console.log("Max:", maxNumber(sampleNumbers));
console.log("Min:", minNumber(sampleNumbers));
console.log("Average:", average(sampleNumbers));

// --- Export functions for testing ---
module.exports = {
    readNumbersFromFile,
    sumNumbers,
    maxNumber,
    minNumber,
    average
};

