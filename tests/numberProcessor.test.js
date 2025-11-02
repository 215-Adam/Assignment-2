const { sumNumbers, maxNumber, minNumber, average } = require('../src/numberProcessor');

describe('Number Processor Tests', () => {

    // Sample numbers to use in tests
    const numbers = [10, 20, 30, 40, 50];

    test('Calculate the sum of all numbers', () => {
        const result = sumNumbers(numbers);
        expect(result).toBe(150); // 10+20+30+40+50 = 150
    });

    test('Find the highest number', () => {
        const result = maxNumber(numbers);
        expect(result).toBe(50); // 50 is the largest
    });

    test('Find the lowest number', () => {
        const result = minNumber(numbers);
        expect(result).toBe(10); // 10 is the smallest
    });

    test('Calculate the average of numbers', () => {
        const result = average(numbers);
        expect(result).toBe(30); // (10+20+30+40+50)/5 = 30
    });

    test('Average of empty array should be 0', () => {
        const result = average([]);
        expect(result).toBe(0);
    });

});
