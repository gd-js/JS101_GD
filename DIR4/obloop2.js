let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};


for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}