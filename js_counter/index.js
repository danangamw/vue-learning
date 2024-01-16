let count = 0;

const countHeader = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countMinBtn = document.getElementById("min");

countHeader.innerText = count;

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
});

countMinBtn.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});
