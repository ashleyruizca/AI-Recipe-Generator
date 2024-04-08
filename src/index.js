function displayIngredients(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatorRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4dab170858822f369f2t3478cb64o2fe";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a professional chief, your challenge is to create a quick recipe with the ingredient given to you with basic ingredients you can find at home. Use HTML tags for formatting text and please provide emojis related to the food.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");

  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛Generating a ${instructionsInput.value} recipe for you......<div>`;

  axios.get(apiUrl).then(displayIngredients);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generatorRecipe);
