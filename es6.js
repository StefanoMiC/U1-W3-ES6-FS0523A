// SPREAD OPERATOR - spalmare proprietà di oggetti

const person = {
  name: "Alessandro",
  surname: "Nicoletti",
  role: "student",
  batch: "FS0523A",
  location: { state: "Italy", region: "Tuscany" }
};

// const person2 = Object.assign({}, person); // clonazione SHALLOW (non profonda) di proprietà di oggetti
const person2 = { ...person, surname: "Angheben", location: { ...person.location, region: "Lombardy" } };
// person2.surname = "Angheben";
// person2.location.region = "Lombardy";

console.log(person);
console.log(person2);

const person3 = JSON.parse(JSON.stringify(person)); // clonazione DEEP (profonda)
person3.location.region = "FVG";
console.log(person.location);
console.log(person3.location);

const planet = {
  name: "Earth",
  location: "Milky way"
};

const planet2 = { ...planet, name: "Pluto", gassy: true }; // clona l'oggetto originario, modifica in-line una proprietà e ne aggiunge una nuova

console.log(planet);
console.log(planet2);

// SPREAD OPERATOR - spalmare elementi di un array

const animals = ["cat", "dog", "mouse", "rabbit"];
const animals2 = ["pig", "duck", "bird"];

const animals3 = [...animals, "horse", ...animals2]; // equivalente a un .concat()

animals3.shift();
console.log(animals);
console.log(animals3);

const stringSpread = [..."Epicode!"];
console.log(stringSpread);

// REST PARAMETERS
// raccoglie tutti gli EXTRA parametri dopo quelli definiti, e li raccoglie dentro un array accessibile dal contesto della funzione
const restTest = function (param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
};

restTest("Stefano", "Epicode", 0, 50, 2000, 0.5);

const car = {
  brand: "Ford",
  model: "Mustang",
  color: "Silver",
  licensePlate: "XD887BD",
  year: 2021
};

// const brand = car.brand;
// const year = car.year;

// DESTRUCTURING di oggetti

const { brand, year, licensePlate, color } = car;

console.log(brand, year, color, licensePlate);

// DESTRUCTURING di parametri di funzione

// VERSIONE CLASSICA di accesso alle proprietà di un oggetto passato come argomento alla funzione
// const showPersonProperties = function (personObj) {
//   console.log(personObj.name);
//   console.log(personObj.surname);
//   console.log(personObj.role);
//   console.log(personObj.batch);
//   console.log(personObj.location.region);
// };

const showPersonProperties = function ({ name, surname, batch, location: { state, region } }) {
  console.log(name);
  console.log(surname);
  console.log(batch);
  console.log(region);
  console.log(state);
};

showPersonProperties(person);

// DESTRUCTURING di array

const letters = ["a", "b", "c", "d", "e", "f"];

const [first, , third, ...rest] = letters;

console.log(first);
console.log(third);
console.log(rest);

const template = `lorem ipsum ${first}, sit dolor ${third}.`;
// const template1 = "lorem ipsum " + first + ", sit dolor " + third + ".";

//funzione per aggiunta di un elemento in una posizione di array determinata dal parametro
const flowers = ["rosa", "geranio", "tulipano", "viola"];

const insertInArray = function (arr, index, valueToInsert) {
  if (Array.isArray(arr)) {
    arr.splice(index, 0, valueToInsert);

    return arr;
  } else {
    return "non hai passato un array";
  }
};

console.log(insertInArray(flowers, 1, "mughetto"));
console.log(insertInArray(letters, 2, "gerbera"));
console.log(insertInArray("letters", 2, "gerbera"));
