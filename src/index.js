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
    "You are a professional chief, your challenge is to create a quick recipe with the ingredient given to you with basic ingredients you can find at home.The recipes need to be provided in HTML. Below Ingredients, include a list using <ul>. Inside the list, add the ingredients to the recipe using measurements and multiple <li> elements. Below. Below Instructions, include a list using <ol>. Inside the list, add the instructions to cook the recipe using measurements and multiple <ol> elements. Please provide emojis related to the search food and provide emojis for ingredients. Do not use ``` html in the beginning. Below Sign the poem with 'Enjoy your meal or dessert 🍰!' inside a <strong> element at the end of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");

  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛Generating a ${instructionsInput.value} recipe for you......<div>`;

  axios.get(apiUrl).then(displayIngredients);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generatorRecipe);
