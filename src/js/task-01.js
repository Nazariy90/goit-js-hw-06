const sumCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${sumCategories.length}`);

const items = document.querySelectorAll(".item");

Array.prototype.forEach.call(items, (element) => {
  const title = element.querySelector("h2").innerHTML;

  const itemsSum = element.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsSum}`);
});
