import { _toPrecision } from "./_to-precision";

describe(_toPrecision.name, () => {
	it("should parse 0", () => {
		expect(_toPrecision(0)).toBe(0);
	});

	it("should throw NaN", () => {
		expect(() => _toPrecision(NaN)).toThrowError();
	});

	it("should throw non-finite", () => {
		expect(() => _toPrecision(Infinity)).toThrowError();
	});

	it("should parse truncate to precision", () => {
		const PRECISION = 8;
		let val = "0.";
		for (let i = 0; i < PRECISION; i++) {
			val += "0";
		}
		val += "1";

		const parsed = _toPrecision(parseFloat(val), PRECISION).toFixed(PRECISION);
		const expected = (0).toFixed(PRECISION);
		expect(parsed).toBe(expected);
	});

	it("should use precision value correctly", () => {
		const PRECISION = 8;
		let val = "0.";
		for (let i = 0; i < PRECISION - 1; i++) {
			val += "0";
		}
		val += "1";

		const parsed = _toPrecision(parseFloat(val), PRECISION).toFixed(PRECISION);
		const expected = (0.00000001).toFixed(PRECISION);
		expect(parsed).toBe(expected);
	});

	it("should pass through whole number", () => {
		expect(_toPrecision(0)).toBe(0);
	});
});
