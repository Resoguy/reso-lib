class Person {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greetings() {
		console.log(`Hello I am ${this.name}`);
	}
}

export default Person;
