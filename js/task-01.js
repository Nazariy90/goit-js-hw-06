const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

const nameCategory = document.querySelectorAll("h2");

nameCategory.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
