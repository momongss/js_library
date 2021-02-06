class Duct {
  eggs = 0;

  constructor(eggs) {
    this.eggs = eggs;
    this.eggs += 1;
  }

  layEggs() {
    this.eggs += 1;
  }
}

function from(json) {
  return Object.assign(new Duct(10), JSON.parse(json));
}

duct = new Duct(20);
console.log(duct);
restoredDuct = from(JSON.stringify(duct));

console.log(restoredDuct);

console.log(restoredDuct === duct);
