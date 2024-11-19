import { logoutUser } from './auth.js';

let commonWords = [];

fetch("common-words.json")
    .then((response) => response.json())
    .then((data) => {
        commonWords = data;
    })
    .catch((error) => console.error("Error loading common words:", error));

function generateRandomWords() {
    if (commonWords.length === 0) {
        return "Common words list not loaded yet!";
    }
    const randomWords = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * commonWords.length);
        randomWords.push(commonWords[randomIndex]);
    }
    return randomWords.join(", ");
}

document.getElementById("generate-btn").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.textContent = await generateRandomWords();
});

document.getElementById("logout-btn").addEventListener("click", () => {
    logoutUser();
});