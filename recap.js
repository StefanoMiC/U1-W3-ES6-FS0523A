// "use strict";
// una funzione può servire per ripetere una serie di istruzioni per più volte, o anche solo per ritardarne l'esecuzione nel tempo

// valori in ingresso possono arrivare attraverso i PARAMETRI della funzione
// i parametri sono rappresentati da dei segnaposto all'interno delle parentesi tonde ()
// che acquisiranno valore SOLO al momento dell'ESECUZIONE della funzione
// servono a rendere DINAMICO il contenuto della funzione
function myFunc(param) {
  // blocco di codice racchiuso in un contesto separato da quello globale
  // questo codice ASPETTERA' di essere chiamato (o eseguito) prima di venire letto da JavaScript
  if (param) {
    console.log(param);
  }

  // senza un return la funzione si definisce VOID o non fruttifera
  // con valore di ritorno invece sarà fruttifera o FRUITFUL
  return param + "VALUE";
}

console.log("OUTER");

myFunc(); // l'esecuzione della funzione e NON ha argomenti ==> parametro undefined
myFunc("INNER"); // l'esecuzione della funzione HA argomenti ==> parametro "INNER"
// alert(myFunc("INNER")); // l'esecuzione della funzione HA argomenti e HA un RETURN, il valore di uscita viene catturato dalla funzione alert()

// per evitare l'HOISTING - le dichiarazioni di funzione che vengono spostate in cima al file in automatico, si può creare una funzione anonima
// racchiusa in una variabile dichiarata con let/const

// myFunc2(); // errore, non è possibile eseguire la funzione prima della sua inizializzazione (comportamento più solido, più auspicabile)
const myFunc2 = function () {
  console.log("myFunc2");
};
// solo da qui in poi la funzione è accessibile
myFunc2();

// ARROW FUNCTIONS
// le arrow functions possono essere SOLO ANONIME, avranno sempre bisogno di essere contenute in una variabile, o altri contenitori....

const myFunc3 = () => {
  console.log("myFunc3");
};

myFunc3();

// const myFunc4 = param1 => {
//   return param1 * 2;
// };

// le arrow functions permettono una forma di dichiarazione più concisa, ovvero
// se la funzione contiene una singola riga di codice il return può diventare implicito SE E SOLO SE non ha le graffe (o le vengono tolte)
const myFunc4 = param1 => param1 * 2; // return implicito del valore moltiplicato

// in presenza di singolo parametro, nella dichiarazione di una funzione freccia, è possibile omettere le parentesi tonde
// con parametro VUOTO o MULTIPLI PARAMETRI le tonde sono OBBLIGATORI

console.log(myFunc4(2));

// Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
// La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.

const upperFirst = str => {
  const words = str.split(" ");

  //   const wordsCapitalized = [];

  let phrase = "";
  for (let i = 0; i < words.length; i++) {
    // const firstLetter = words[i][0];
    // const remainingWord = words[i].slice(1);
    // il metodo precedente non è specifico per le stringhe, funziona ma non comunica la manipolaizone di una stringa

    const firstLetter = words[i].charAt(0).toUpperCase();
    const remainingWord = words[i].substring(1);

    // console.log(firstLetter.toUpperCase());
    // console.log(remainingWord);
    // console.log(firstLetter + remainingWord); // anche col + otteniamo una concatenazione di stringa
    // console.log(firstLetter.concat(remainingWord));

    // wordsCapitalized.push(firstLetter.concat(remainingWord));
    phrase += firstLetter.concat(remainingWord, " ");
  }
  //   return wordsCapitalized.join(" ");
  return phrase.substring(0, phrase.length - 1);
};

console.log(upperFirst("epicode is the school of awesomness!"));
console.log(upperFirst("hello world, it's monday"));
