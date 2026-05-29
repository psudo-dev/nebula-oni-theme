import { Person } from "./for-show/person";

class Employee extends Person {
	constructor(firstName, lastName, age, likes, position) {
		super(firstName, lastName, age, likes);
		this.position = position;
	}
	getPosition() {
		return `<p>${this.firstName} is ${this.position}.</p>`;
	}
}

const johnDoe = new Employee("John", "Doe", 30, "Sports", "Teacher");

/**
 * @type {string} - support.type.primitive
 */
const name = "Gemini";

/**
 * @type {number} - support.type.primitive
 */
const version = 3.5;

/**
 * @type {boolean} - support.type.primitive
 */
const isReady = true;

/**
 * @type {bigint} - support.type.primitive
 */
const largeNumber = 9007199254740991n;

/**
 * @type {symbol} - support.type.primitive
 */
const privateKey = Symbol("id");

/**
 * @param {any} input - Often scoped as a primitive in JSDoc
 * @returns {void} - support.type.primitive
 */
function processData(input) {
	console.log(input);
}

/**
 * @type {null}
 */
const emptyValue = null;

/**
 * @type {undefined}
 */
const notFound = undefined;

console.log();
