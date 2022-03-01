// The operation shoul return the sum of two number

const { addition } = require("./addition");
const { division } = require("./division");

// test("2 + 3 = 5", () => {
// 	expect(addition(2, 3)).toBe(5);
// });

test("8 / 2 = 4", () => {
	expect(division(8, 2)).toBe(4);
});

// test.skip("1 + 7 = 8", () => {
// 	expect(addition(1, 7)).toBe(8);
// });
