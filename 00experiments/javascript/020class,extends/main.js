class Animal {
	constructor (name) {
		this.speed = 0;
		this.name = name;
	}
	run(speed) {
		this.speed = speed;
		console.log(`${this.name} 는 속도 ${this.speed}로 달립니다`);
	}
	stop() {
		this.speed = 0;
		console.log(`${this.name}가 멈췄습니다.`);
	}
}

let animal = new Animal('사자');
console.log(animal);
animal.run(5);

class Rabbit extends Animal {
	hide() {
		console.log(`${this.name} 가 숨었습니다`);
	}
}

let rabbit = new Rabbit('토토로끼')
rabbit.run(63);
rabbit.hide();
