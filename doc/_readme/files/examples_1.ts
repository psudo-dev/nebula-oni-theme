class Animal {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Raven extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 100) {
		console.log("Playing around...");
		super.move(distanceInMeters);
	}
}

/**
 * All the keywords highlighted below are typically
 * scoped as 'support.type.primitive'
 */

// 1. Standard Primitives
const username: string = "Gemini";
const age: number = 25;
const isActive: boolean = true;
const bigIntVal: bigint = 9007199254740991n;
const sym: symbol = Symbol("unique");

// 2. Special Utility Primitives
let dynamicValue: any = "Could be anything";
let cautiousValue: unknown = "I need to check this first";

// 3. Functional Primitives
function logMessage(message: string): void {
	console.log(message);
}

function throwError(msg: string): never {
	throw new Error(msg);
}

// 4. Type Aliases using Primitives
type ID = string | number;

// 5. The 'object' primitive (distinct from curly brace types)
const data: object = { key: "value" };

// 6. Null and Undefined
// Note: Depending on the specific theme, these are sometimes
// scoped as 'constant.language', but often fall under support types.
let nothing: null = null;
let notDefined: undefined = undefined;
