const btnChangeColor = document.getElementById("btn-change-color");
const container = document.querySelector(".container");
const color = document.getElementById("color");

const colors = [
  "red",
  "green",
  "blue",
  "#880e4f",
  "#7b1fa2",
  "#1e88e5",
  "#00b0ff",
  "#00e5ff",
  "#1b5e20",
  "#fff",
];

// Change Color Button Event Listener
btnChangeColor.addEventListener("click", () => {
  let n = Math.floor(Math.random() * 10);

  // Changing styles on based of random number between 0-9
  container.style.backgroundColor = colors[n];

  // Updating the color text in display
  color.textContent = colors[n];
});
