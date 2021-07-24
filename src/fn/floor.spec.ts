import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { testSingleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { floor } from "./floor";
import { toArray } from "./to-array";

describe(floor.name, () => {
	it("should return inferred types", () => {
		testSingleVecSig(floor);
	});

	it("should throw invalid input", () => {
		const dest: Vec2 = { x: 0, y: 0 };
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => floor(null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => floor(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should floor values", () => {
		expect(floor({ x: 0.9, y: 1 + 0.0000001 })).toEqual({ x: 0, y: 1 });
	});

	it("should modify destination", () => {
		const vec = { x: -1.1, y: 1.1 };
		const dest = { x: 0, y: 0 };
		floor(vec, dest);

		expect(vec).toEqual({ x: -1.1, y: 1.1 });
		expect(dest).toEqual({ x: -2, y: 1 });
	});

	it("should return target", () => {
		const vec1 = { x: -1, y: -1 };
		const result = floor(vec1);
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1 = { x: -1, y: -1 };
		const dest = { x: 0, y: 0 };
		const result = floor(vec1, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec = { x: 0.1, y: 0.1 };
		floor(vec);

		expect(vec).toEqual({ x: 0, y: 0 });
	});

	it("should modify destination", () => {
		const vec1 = { x: 0.1, y: 0.1 };
		const dest = { x: 0, y: 0 };
		floor(vec1, dest);

		expect(vec1).toEqual({ x: 0.1, y: 0.1 });
		expect(dest).toEqual({ x: 0, y: 0 });
	});

	it("should accept array", () => {
		const vec1: [number, number] = [0.1, 0.1];
		const result = floor(vec1);

		expect(result).toBe(vec1);
		expect(result).toEqual([0, 0]);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 0.1, y: 0.1 };
		const dest: [number, number] = [0, 0];
		const result = floor(vec1, dest);

		expect(result).toBe(dest);
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 0.1, y: 0.1 };
		const dest = { x: 0, y: 0 };
		const result = floor(vec1, dest);

		expect(result).toBe(dest);
		expect(result).toEqual(ZERO);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [0.1, 0.1];
		const dest: [number, number] = [0, 0];
		const result = floor(vec1, dest);

		expect(result).toBe(dest);
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 0.1, y: 0.1 };
		const dest = { x: 0, y: 0 };
		const result = floor(vec1, dest);

		expect(result).toBe(dest);
		expect(result).toEqual(ZERO);
	});
});
