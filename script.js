const words = [
    "apple", "banana", "cherry", "dragonfruit", "elephant",
    "flower", "grape", "honey", "island", "jungle",
    "kangaroo", "lemon", "mountain", "notebook", "ocean",
    "penguin", "quartz", "rainbow", "sunflower", "tiger",
    "umbrella", "volcano", "waterfall", "xylophone", "yacht", "zebra"
];

function generateRandomWords() {
    const randomWords = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex]);
    }
    return randomWords.join(", ");
}

document.getElementById("generate-btn").addEventListener("click", () => {
    const output = document.getElementById("output");
    output.textContent = generateRandomWords();
});
