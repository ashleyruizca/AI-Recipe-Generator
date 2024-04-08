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
    "You are a professional cook, who can cook all around the world, your expertise is to make a quick and easy recipes; your challenge is to provide all the ingredients in basic HTML. Be nice and gentle while providing the ingredients";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayIngredients);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generatorRecipe);
