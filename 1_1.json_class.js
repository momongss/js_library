class Duct {
  constructor(eggs) {
    this.eggs = eggs;
  }

  layEggs() {
    this.eggs += 1;
  }
}

const duct = new Duct(20);
console.log(duct);

const jsonDuct = JSON.stringify(duct);
console.log(jsonDuct);

const restoredDuct = JSON.parse(jsonDuct);
console.log(restoredDuct);
