let numberOfPets = {
  dogs: 0,
  cats: 0,
  fish: 99
};


let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length) {

let pet = pets[counter];
let petCount = numberOfPets[pet];

console.log(pet);
console.log(petCount);
counter += 1;
}