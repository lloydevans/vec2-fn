import { ERROR_MESSAGES } from "../constants/error-messages";
import { _lerpValue } from "./_lerp-value";

describe(_lerpValue.name, () => {
	it("should parse 0", () => {
		expect(_lerpValue(0, 0, 0)).toEqual(0);
	});

	it("should throw NaN", () => {
		expect(() => _lerpValue(NaN, 1, 1)).toThrowError(ERROR_MESSAGES.NAN);
		expect(() => _lerpValue(0, NaN, 1)).toThrowError(ERROR_MESSAGES.NAN);
		expect(() => _lerpValue(0, 1, NaN)).toThrowError(ERROR_MESSAGES.NAN);
	});

	it("should throw non-finite", () => {
		expect(() => _lerpValue(Infinity, 1, 1)).toThrowError(ERROR_MESSAGES.NON_FINITE);
		expect(() => _lerpValue(0, Infinity, 1)).toThrowError(ERROR_MESSAGES.NON_FINITE);
		expect(() => _lerpValue(0, 1, Infinity)).toThrowError(ERROR_MESSAGES.NON_FINITE);
	});

	it("should calculate a value", () => {
		expect(_lerpValue(0, 1, 0.5)).toEqual(0.5);
	});

	it("should correctly calculate a sequence", () => {
		const steps = 100;
		for (let i = 0; i < steps; i++) {
			expect(_lerpValue(0, 2, i / steps)).toEqual((i / steps) * 2);
		}
	});
});
