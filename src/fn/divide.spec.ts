import { ERROR_MESSAGES } from "../constants/error-messages";
import { MINUS_ONE } from "../constants/minus-one";
import { ONE } from "../constants/one";
import { testDoubleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { divide } from "./divide";
import { toArray } from "./to-array";

describe(divide.name, () => {
	it("should return inferred types", () => {
		testDoubleVecSig(divide);
	});

	it("should throw divide by zero", () => {
		const vec1: Vec2 = { x: 2, y: 2 };
		const vec2: Vec2 = { x: 1, y: 0 };
		const dest: Vec2 = { x: 0, y: 0 };
		expect(() => divide(vec1, vec2, dest)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: Vec2 = { x: 0, y: 0 };
		expect(() => divide(null as any, vec2, dest)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => divide(vec1, null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => divide(vec1, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should divide value", () => {
		expect(divide({ x: 1, y: 1 }, { x: 2, y: 2 })).toEqual({ x: 0.5, y: 0.5 });
	});

	it("should return target", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
	});

	it("should return target deep", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = divide(divide(divide(vec1, ONE), ONE), ONE);
		expect(result).toEqual({ x: 1, y: 1 });
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		const result = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const result: Vec2 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual({ x: 0.5, y: 0.5 });
		expect(vec2).toEqual({ x: 2, y: 2 });
	});

	it("should modify destination", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		divide(vec1, vec2, dest);
		expect(vec1).toEqual({ x: 1, y: 1 });
		expect(dest).toEqual({ x: 0.5, y: 0.5 });
	});

	it("should accept: object, number", () => {
		const vec1: Vec2 = { x: -2, y: -2 };
		const vec2 = 2;
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec2).toEqual(2);
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: array, number", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const vec2 = 1;
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(ONE);
		expect(result).toEqual(ONE);
	});

	it("should accept: object, array", () => {
		const vec1: Vec2 = { x: 2, y: 2 };
		const vec2: Vec2Array = [2, 2];
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec2).toEqual([2, 2]);
		expect(result).toEqual(ONE);
	});

	it("should accept: object, object", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(ONE);
		expect(result).toEqual(ONE);
	});

	it("should accept: array, array", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [2, 2];
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(result).toEqual([-0.5, -0.5]);
	});

	it("should accept: array, object", () => {
		const vec1: Vec2Array = [1, 1];
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = divide(vec1, vec2);
		expect(result).toBe(vec1);
		expect(result).toEqual([1, 1]);
	});

	it("should accept: object, array, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: object, object, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: Vec2 = { x: 0, y: -10 };
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(ONE);
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: array, array, object", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: array, object, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(MINUS_ONE);
	});

	it("should accept: object, array, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: object, object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(ONE);
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: array, array, array", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});

	it("should accept: array, object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: Vec2Array = divide(vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(MINUS_ONE));
	});
});
