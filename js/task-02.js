const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsPlace = document.querySelector("#ingredients");

const ingredientsResult = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
});

ingredientsPlace.append(...ingredientsResult);
