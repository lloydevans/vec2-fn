import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { testSingleVecSig } from "../test/utils";
import { toArray } from "./to-array";
import { zero } from "./zero";

describe(zero.name, () => {
	it("should return inferred types", () => {
		testSingleVecSig(zero);
	});

	it("should throw invalid input", () => {
		expect(() => zero(null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should make values zero", () => {
		expect(zero({ x: -1, y: -1 })).toEqual(ZERO);
	});

	it("should modify destination", () => {
		const dest = { x: 1, y: 1 };
		const result = zero(dest);
		expect(result).toBe(dest);
		expect(dest).toEqual(ZERO);
	});

	it("should accept array", () => {
		const vec1: [number, number] = [-1, -1];
		const result = zero(vec1);

		expect(result).toBe(vec1);
		expect(result).toEqual(toArray(ZERO));
	});
});
