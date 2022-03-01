// The operation shoul return the sum of two number

const { addition } = require("./addition");
const { division } = require("./division");

// test.each([
// 	[3, 4, 7],
// 	[5, -10, -5],
// 	[0, 2, 2],
// ])("a + b = c", (a, b, expected) => expect(addition(a, b)).toBe(expected));

test.each([
	[16, 8, 2],
	[36, 6, 6],
	[45, 9, 5],
])("a / b = c", (a, b, expected) => expect(division(a, b)).toBe(expected));
