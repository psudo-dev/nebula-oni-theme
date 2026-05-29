class Animal {
	constructor(theName) {
		this.name = theName;
	}

	move(distanceInMeters = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Raven extends Animal {
	constructor(name) {
		super(name);
	}

	move(distanceInMeters = 100) {
		console.log("Playing around...");
		super.move(distanceInMeters);
	}
}

// Example Usage:
const bird = new Raven("Edgar");
bird.move();
