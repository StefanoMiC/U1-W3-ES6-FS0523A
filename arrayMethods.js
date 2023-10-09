const animals = ["cat", "dog", "mouse", "rabbit"];
const animals2 = ["pig", "duck", "bird"];

const animals3 = [...animals, "horse", ...animals2];
const letters = ["a", "b", "c", "d", "e", "f"];
const flowers = ["rosa", "geranio", "tulipano", "viola"];

// Metodo forEach()
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}

// il metodo forEach richiede una funzione, che verrà chiamata per tutti gli elementi dell'array
// l'elemento (dell'array) viene fornito attraverso il parametro della funzione da noi creata
// quindi nel contesto di questa funzione, possiamo riferirci al parametro, e utilizzarlo

// il metodo forEach non ritorna niente, serve solo ad eseguire un dato numero di istruzioni per quanti elementi esistono nell'array

let concatenateAnimals = "";

animals3.forEach((animal, i) => {
  concatenateAnimals += animal + i;
  console.log(concatenateAnimals, i);
});

// animals3.forEach(function (animal) {
//   concatenateAnimals += animal;
// });

// animals3.forEach(animal => (concatenateAnimals += animal));

console.log(concatenateAnimals);

// Metodo map()
// serve a MODIFICARE gli elementi dell'array e a ricevere un NUOVO ARRAY con questi nuovi elementi modificati

// const newFlowers = flowers.map(flower => {
//   return flower + "!"; // !!! IMPORTANTISSIMO il return
// });

// OPPURE
const newFlowers = flowers.map(flower => flower.charAt(0).toUpperCase() + flower.substring(1) + "!"); // altrimenti RICORDARSI di non avere le graffe, il return sarà quindi implicito

console.log(flowers);
console.log(newFlowers);

const numbers = [2, 5, 10, 50, 60, 90, 0];
const multiplyByTwo = numbers.map(num => num * 2);
console.log(multiplyByTwo);

const newFlowersHTML = flowers.map(flower => `<li>${flower}</li>`);
console.log(newFlowersHTML);

const persons = [
  {
    name: "Alessandro",
    surname: "Nicoletti",
    role: "student",
    age: 30,
    batch: "FS0523A",
    location: { state: "Italy", region: "Tuscany" }
  },
  {
    name: "Caterina",
    surname: "Crisci",
    role: "student",
    age: 16,
    batch: "FS0523A",
    location: { state: "Italy", region: "Tuscany" }
  },
  {
    name: "Alessandro",
    surname: "Angheben",
    role: "student",
    age: 29,
    batch: "FS0523A",
    location: { state: "Italy", region: "Tuscany" }
  }
];

const onlySurnames = persons.map(p => p.surname);
console.log(onlySurnames);

// Metodo filter()
// anche il filter ritorna un nuovo array, ma potrebbe contenere meno elementi rispetto all'originale, perché li abbiamo filtrati
// per una condizione che deve tornare TRUE / FALSE
const filteredByAge = persons.filter(p => p.age >= 18);
console.log(filteredByAge);
const greaterThanThree = animals3.filter(animal => animal.length > 3);
const startsWithM = animals3.filter(animal => animal.charAt(0) === "m" || animal.charAt(0) === "d");

console.log(animals3);
console.log(greaterThanThree);
console.log(startsWithM);

// il metodo find ritorna l'elemento trovato (non un array!)
const lowerThan18 = persons.find(person => person.age < 18);
console.log(lowerThan18);

console.log(numbers);

// Metodo reduce()
// riduce un array in un SINGOLO VALORE (determinato anche dal valore iniziale, se presente)
const sum = numbers.reduce((accumulatore, valoreCorrente) => {
  console.log("ACC", accumulatore);
  console.log("VAL", valoreCorrente);

  return accumulatore + valoreCorrente;
}, 0);
console.log(sum);

// const summedArr = numbers.reduce((acc, curr) => acc.concat(curr * 2), []);
const summedArr = numbers.reduce((acc, curr) => [...acc, curr * 2], []);
console.log(summedArr);
