// Values and variables
{
  const country = "Nigeria";
  const continent = "Africa";
  const population = 400000000;

  console.log(country);
  console.log(continent);
  console.log(population);
}

// Data types
{
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
}

// let, const and var
{
  const language = "English";
  const country = "Nigeria";
  const isIsland = false;
  isIsland = true;
  console.log(isIsland);
}

// Basic operators
{
  let nigeriaPopulation = 400000000;

  const firstHalfPopulation = (1 / 2) * nigeriaPopulation;
  const secondtHalfPopulation = (1 / 2) * nigeriaPopulation;
  console.log(firstHalfPopulation);
  console.log(secondtHalfPopulation);

  nigeriaPopulation += 1;
  console.log(nigeriaPopulation);

  const finlandPopulation = 6000000;
  console.log(nigeriaPopulation > finlandPopulation);

  const PopulationX = 33000000 / (1 / 2);
  console.log(PopulationX);
  console.log(nigeriaPopulation < PopulationX);

  const nigeriaDescription =
    "Nigeria is in Africa and its 400 million people speak diverse languages, one of which is commonly english.";

  console.log(nigeriaDescription);
}

// Strings and template literals
{
  const country = "Nigeria";
  const continent = "Africa";
  const population = 400000000;
  const language = "English";

  const nigeriaDescription = `${country} is in ${continent} and its ${population} people speak diverse languages, one of which is ${language}`;

  console.log(nigeriaDescription);

  console.log(
    `${country} is in ${continent} and its ${population} people speak diverse languages, one of which is ${language}`,
  );
}

// Taking decisions: if / else statements
{
  const country = "Nigeria";
  const population = 400000000;

  if (population > 33000000) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${33000000 - country} below average`);
  }
}

// Equality operators: == vs ===
const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
console.log(numNeighbours);

if (numNeighbours === 1) {
  console.log(`Only one border!`);
} else if (numNeighbours > 1) {
  console.log(`More than one border!`);
} else {
  console.log(`No borders`);
}

// Logical operators
{
  const country = "Nigeria";
  let population = 400000000;
  const isNotIsland = true;
  let language = "English";

  language = true;
  population = false;

  if (language && population && isNotIsland) {
    console.log(`You should live in Nigeria!`);
  } else {
    console.log(`Nigeria does not meet your critaria`);
  }
}

// The switch statement
const language = "english";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "english":
    console.log(`3rd place`);
    break;
  case "hindi":
    console.log(`Number 4`);
    break;
  case "arabic":
    console.log(`5th most spoken language`);
    break;
  default: {
    console.log(`Great language too`);
  }
}

// The conditional (Ternary) operator

const country = "Nigeria";
const population = 400000000;
population > 33000000
  ? console.log(`Nigeria's population is above average`)
  : console.log(`Nigeria's population is below average`);
