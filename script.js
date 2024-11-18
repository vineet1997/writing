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

function generateRandomWords() {
    return fetch("https://random-word-api.herokuapp.com/word?number=3")
        .then((response) => response.json())
        .then((data) => data.join(", "))
        .catch((error) => "Error fetching words: " + error.message);
}

document.getElementById("generate-btn").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.textContent = await generateRandomWords();
});
