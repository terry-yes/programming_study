class Dog {
	constructor(name, age) {
		this.name = name
		this.age = age;
	}

	getName() {
		console.log(this.name)
	}

	getAgeName() {
		console.log(this.age);
		this.getName();
	}


}

let kiddo = new Dog('kiddo', 10);
kiddo.getAgeName();
