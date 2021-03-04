const btnChangeColor = document.getElementById("btn-change-color");
const container = document.querySelector(".container");
const colorContent = document.getElementById("color");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

btnChangeColor.addEventListener("click", (e) => {
  e.preventDefault();
  // To get a random color
  const colorValue = randomColorGenerator();

  // Change background after getting the color
  container.style.backgroundColor = "#" + colorValue;

  // Change the content to the color
  colorContent.textContent = "#" + colorValue;
});

function randomColorGenerator() {
  let color = "";
  for (let i = 0; i < 6; i++) {
    const n = Math.floor(Math.random() * 16);
    color += hexValues[n];
  }

  return color;
}
