function generatorRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "ingredients",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generatorRecipe);
