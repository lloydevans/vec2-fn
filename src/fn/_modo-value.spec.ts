import { _modoValue } from "./_modo-value";

describe(_modoValue.name, () => {
	it("should parse 0", () => {
		expect(_modoValue(0, 1)).toEqual(0);
	});

	it("should throw NaN", () => {
		expect(() => _modoValue(NaN, 1)).toThrowError("NaN detected");
		expect(() => _modoValue(0, NaN)).toThrowError("NaN detected");
	});

	it("should throw non-finite", () => {
		expect(() => _modoValue(Infinity, 1)).toThrowError("Non-finite number detected");
		expect(() => _modoValue(0, Infinity)).toThrowError("Non-finite number detected");
	});

	it("should wrap", () => {
		expect(_modoValue(1.5, 1)).toEqual(0.5);
		expect(_modoValue(-1.5, 1)).toEqual(0.5);
	});
});
