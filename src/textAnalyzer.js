const fs = require('fs');

// Count total words
function countWords(content) {
    const words = content.split(/\s+/);
    return words.length;
}

// Find longest word
function findLongestWord(content) {
    const words = content.split(/\s+/);
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

// Count total lines
function countLines(content) {
    const lines = content.split('\n');
    return lines.length;
}

// --- Verification code (bottom) ---
const sample = fs.readFileSync('./data/sample-text.txt', 'utf8');
console.log("Data/Sample-text");
console.log("Sample — Words:", countWords(sample));
console.log("Sample — Longest:", findLongestWord(sample));
console.log("Sample — Lines:", countLines(sample));

const quotes = fs.readFileSync('./data/quotes.txt', 'utf8');
console.log("Data/quotes");
console.log("Quotes — Words:", countWords(quotes));
console.log("Quotes — Longest:", findLongestWord(quotes));
console.log("Quotes — Lines:", countLines(quotes));

// --- Export functions for testing ---
module.exports = {
    countWords,
    findLongestWord,
    countLines
};
