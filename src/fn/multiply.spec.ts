import { ERROR_MESSAGES } from "../constants/error-messages";
import { MINUS_ONE } from "../constants/minus-one";
import { ONE } from "../constants/one";
import { ZERO } from "../constants/zero";
import { testDoubleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { multiply } from "./multiply";
import { toArray } from "./to-array";

describe(multiply.name, () => {
	it("should return inferred types", () => {
		testDoubleVecSig(multiply);
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: Vec2 = { x: 0, y: 0 };
		expect(() => multiply(null as any, vec2, dest)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => multiply(vec1, null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => multiply(vec1, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should multiply value", () => {
		expect(multiply({ x: -1, y: -1 }, { x: 1, y: 1 })).toEqual({ x: -1, y: -1 });

		for (let i = 0; i < 100; i++) {
			const x = Math.random() * Number.MAX_VALUE;
			const y = Math.random() * Number.MAX_VALUE;
			expect(multiply({ x: 1, y: 1 }, { x, y })).toEqual({ x, y });
		}
	});

	it("should return target", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
	});

	it("should return target deep", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = multiply(multiply(multiply(vec1, ONE), ONE), ONE);
		expect(result).toEqual(ONE);
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		const result = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		multiply(vec1, vec2);
		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(vec2).toEqual({ x: 1, y: 1 });
	});

	it("should modify destination", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		multiply(vec1, vec2, dest);
		expect(vec2).toEqual({ x: 1, y: 1 });
		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(dest).toEqual({ x: -1, y: -1 });
	});

	it("should accept: object, number", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2 = 1;
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec2).toEqual(1);
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: array, number", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2 = 1;
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
		expect(result).toEqual(ZERO);
	});

	it("should accept: object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: object, object", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const vec2: Vec2 = { x: 0, y: 0 };
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(ZERO);
		expect(result).toEqual(ZERO);
	});

	it("should accept: array, array", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: array, object", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = multiply(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: object, array, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: object, object, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: Vec2 = { x: 0, y: -10 };
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(ONE);
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: array, array, object", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: array, object, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: object, array, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: object, object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(ONE);
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: array, array, array", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: array, object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: Vec2Array = multiply(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});
});
