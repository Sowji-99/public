const nounInput = document.getElementById("noun-input");
const verbInput = document.getElementById("verb-input");
const adjectiveInput = document.getElementById("adjective-input");
const locationInput = document.getElementById("location-input");
const foodInput = document.getElementById("food-input");
const madLibTextResult = document.getElementById("madlib-text");
const generateMadLibBtn = document.getElementById("generate-madlib-btn");

let noun;
let verb;
let adjective;
let locationInputValue;
let food;

nounInput.addEventListener("input", (e) => (noun = e.target.value));
verbInput.addEventListener("input", (e) => (verb = e.target.value));
adjectiveInput.addEventListener("input", (e) => (adjective = e.target.value));
locationInput.addEventListener("input", (e) => (locationInputValue = e.target.value));
foodInput.addEventListener("input", (e) => (food = e.target.value));

const resetValues = () => {
  nounInput.value = "";
  verbInput.value = "";
  adjectiveInput.value = "";
  locationInput.value = "";
  foodInput.value = "";
  noun = undefined;
  verb = undefined;
  adjective = undefined;
  locationInputValue = undefined;
  food = undefined;
};

generateMadLibBtn.addEventListener("click", () => {
  const madLibsArr = [
    `${noun} ${verb} ${adjective} in ${locationInputValue} and ate ${food}.`,
    `While ${verb} ${adjective} in ${locationInputValue}, ${noun} had ${food}.`,
    `${noun} loves to travel to ${locationInputValue} and eat ${food} while ${verb} ${adjective}.`
  ];

  const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  if (
    [noun, verb, adjective, locationInputValue, food].some(
      (userSelection) => userSelection === undefined || userSelection.trim() === ""
    )
  ) {
    alert("Please fill in all the input fields");
    return;
  }
  madLibTextResult.innerText = madLibsArr[randomIndex];
  resetValues();
});
