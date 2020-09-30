let a = new Date();
console.log(a);
console.log(a.getDate());
console.log(typeof a);



function Shiba(number) {
  this.age = number;
}

Shiba.prototype.kiddo = function (name) {
  this.name = name;
  return this.name;
}

let b = new Shiba(50);
let c = b.kiddo('똠똠');
console.log(b)



class Dog {
  constructor (name, age, race) {
    this.name = name;
    this.age = age;
    this.race = race;
  }
  getName() {
    console.log(this.name);
  }

}

let kiddo = new Dog('kiddo', 3, 'shiba');
console.log(kiddo);
kiddo.getName();