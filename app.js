let word = document.getElementById("word");
let definition = document.getElementById("definition")
let button = document.getElementById("submit");
let main = document.getElementById("main");

button.addEventListener("click", async () => await getDefinition());

async function getDefinition() {
    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`);
    console.log(response.data[0].meanings[0].definitions[1]);
    let definition = document.createElement("h5");

    // data was an array of objects so I had to use the index to get a specific element and I used string method to replaceAll to clean the JSON string
    // I also wanted to practice creating elements, assigning them a class and appending them in JS
    // I used concatenation to indicate the search word next to the definition
    definition.textContent = word.value + ":" + JSON.stringify(response.data[0].meanings[0].definitions[0]).replaceAll("{", "").replaceAll("{", "").replaceAll("[", "").replaceAll("]", "").replaceAll("}", "");

    //Used the class container to apply bootstrap library
    definition.classList = "container";
    main.appendChild(definition);

}
