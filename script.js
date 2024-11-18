// function generateRandomWords() {
//     return fetch("https://api.datamuse.com/words?ml=random")
//         .then((response) => response.json())
//         .then((data) => {
//             const randomWords = [];
//             for (let i = 0; i < 3; i++) {
//                 const randomIndex = Math.floor(Math.random() * data.length);
//                 randomWords.push(data[randomIndex].word);
//             }
//             return randomWords.join(", ");
//         })
//         .catch((error) => "Error fetching words!");
// }

// function generateRandomWords() {
//     return fetch("https://random-word-api.herokuapp.com/word?number=3")
//         .then((response) => response.json())
//         .then((data) => data.join(", "))
//         .catch((error) => "Error fetching words: " + error.message);
// }

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
