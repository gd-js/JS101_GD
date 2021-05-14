let mixed = ['hello', 10, undefined];

for (let counter = 0; counter < mixed.length; counter += 1) {
  console.log(typeof mixed[counter]);
}

/// looping through objects requires arrayization via Object.keys and a while loop to break up the keys and values
/// as so

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
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

/// alternative

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}