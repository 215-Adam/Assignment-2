const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

test('Count the total number of words in text', () =>{ 
    const result = countWords('Count the total number of words');
    expect(result).toBe(6);
});

test('Find the longest word in text', () =>{ 
    const result = findLongestWord('Count the total numbers of words');
    expect(result).toBe('numbers');
});

test('Count how many lines the text has', () => {
    const sampleText = `This is line one
This is line two
This is line three`;
    const result = countLines(sampleText);
    expect(result).toBe(3);
});