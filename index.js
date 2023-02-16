function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 1;
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        sentenceLength++;
        if (sentence[i] === " ") {
            wordCount++;
        } else if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u" || sentence[i] === "A" || sentence[i] === "E" || sentence[i] === "I" || sentence[i] === "O" || sentence[i] === "U") {
            vowelCount++;
        }
    }

    console.log("Length of the sentence: " + sentenceLength);
    console.log("Number of words in the sentence: " + wordCount);
    console.log("Number of vowels in the sentence: " + vowelCount);
}

let sentence = "This is an example sentence.";
analyzeSentence(sentence);
