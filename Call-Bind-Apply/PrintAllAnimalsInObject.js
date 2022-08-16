// print all animals in the object

const animals = [
  { species: "Tiger", name: "Tory" },
  { species: "Lion", name: "Lory" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`# ${i} ${this.species}: ${this.name}`);
  };
  this.print();
}

animals.forEach((animal, index) => printAnimals.call(animal, index));
