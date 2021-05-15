import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { MINUS_ONE } from "../constants/minus-one";
import { ONE } from "../constants/one";
import { ZERO } from "../constants/zero";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { toArray } from "./to-array";
import { _performOperand } from "./_perform-operand";

describe(_performOperand.name, () => {
	it("should return inferred types", () => {
		type CustomVec2Array = [number, number];
		type CustomVec2Object = { x: number; y: number; clone: () => CustomVec2Object };

		const clone = (): CustomVec2Object => ({ x: 0, y: 0, clone });
		const vec1O1: { x: number; y: number } = { x: -1, y: -1 };
		const vec1O2: CustomVec2Object = clone();
		const vec1O3: Vec2 = { x: 0, y: 0 };
		const vec1A1: [number, number] = [-1, -1];
		const destO1 = { x: 0, y: 0 };
		const destO2: Vec2 = { x: 0, y: 0 };
		const destA1: [number, number] = [0, 0];
		const destA2: CustomVec2Array = [0, 0];

		expectType<number[]>(_performOperand("+", vec1A1, 0));
		expectType<{ x: number; y: number }>(_performOperand("+", vec1O1, 0));
		expectType<CustomVec2Object>(_performOperand("+", vec1O2, 0));
		expectType<Vec2>(_performOperand("+", vec1O3, 0));
		expectType<number[]>(_performOperand("+", vec1A1, 0, destA1));
		expectType<CustomVec2Array>(_performOperand("+", vec1A1, 0, destA2));
		expectType<{ x: number; y: number }>(_performOperand("+", vec1A1, 0, destO1));
		expectType<Vec2>(_performOperand("+", vec1A1, 0, destO2));
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: Vec2 = { x: 0, y: 0 };
		expect(() => _performOperand("+", null as any, vec2, dest)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => _performOperand("+", vec1, null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => _performOperand("+", vec1, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should throw divide by zero", () => {
		expect(() => _performOperand("/", [1, 1], 0)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
		expect(() => _performOperand("/", { x: 1, y: 1 }, 0)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
		expect(() => _performOperand("%", [1, 1], 0)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
		expect(() => _performOperand("%", { x: 1, y: 1 }, 0)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
	});

	it("should do all operands", () => {
		expect(_performOperand("+", { x: -1, y: -1 }, { x: 1, y: 1 })).toEqual({ x: 0, y: 0 });
		expect(_performOperand("-", { x: 1, y: 1 }, { x: 1, y: 1 })).toEqual({ x: 0, y: 0 });
		expect(_performOperand("*", { x: -1, y: -1 }, { x: 1, y: 1 })).toEqual({ x: -1, y: -1 });
		expect(_performOperand("/", { x: -1, y: -1 }, { x: 2, y: 2 })).toEqual({ x: -0.5, y: -0.5 });
		expect(_performOperand("%", { x: 1.1, y: 1.1 }, { x: 0.5, y: 0.5 })).toEqual({ x: 0.1, y: 0.1 });
		expect(_performOperand("-%", { x: 1.1, y: 1.1 }, { x: 0.5, y: 0.5 })).toEqual({ x: 0.1, y: 0.1 });

		expect(_performOperand("+", [-1, -1], [1, 1])).toEqual([0, 0]);
		expect(_performOperand("-", [1, 1], [1, 1])).toEqual([0, 0]);
		expect(_performOperand("*", [-1, -1], [1, 1])).toEqual([-1, -1]);
		expect(_performOperand("/", [-1, -1], [2, 2])).toEqual([-0.5, -0.5]);
		expect(_performOperand("%", [1.1, 1.1], [0.5, 0.5])).toEqual([0.1, 0.1]);
		expect(_performOperand("-%", [1.1, 1.1], [0.5, 0.5])).toEqual([0.1, 0.1]);

		expect(_performOperand("+", { x: -1, y: -1 }, 1)).toEqual({ x: 0, y: 0 });
		expect(_performOperand("-", { x: 1, y: 1 }, 1)).toEqual({ x: 0, y: 0 });
		expect(_performOperand("*", { x: -1, y: -1 }, 1)).toEqual({ x: -1, y: -1 });
		expect(_performOperand("/", { x: -1, y: -1 }, 2)).toEqual({ x: -0.5, y: -0.5 });
		expect(_performOperand("%", { x: 1.1, y: 1.1 }, 0.5)).toEqual({ x: 0.1, y: 0.1 });
		expect(_performOperand("-%", { x: 1.1, y: 1.1 }, 0.5)).toEqual({ x: 0.1, y: 0.1 });
	});

	it("should return target", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
	});

	it("should return target deep", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const result: typeof vec1 = _performOperand("+", _performOperand("+", _performOperand("+", vec1, ONE), ONE), ONE);
		expect(result).toEqual({ x: 3, y: 3 });
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		const result = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		_performOperand("+", vec1, vec2);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(vec2).toEqual({ x: 1, y: 1 });
	});

	it("should modify destination", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		_performOperand("+", vec1, vec2, dest);
		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(dest).toEqual({ x: 1, y: 1 });
	});

	it("should accept: object, number", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2 = 1;
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec2).toEqual(1);
		expect(result).toEqual(ZERO);
	});

	it("should accept: array, number", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2 = 1;
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(ONE);
		expect(result).toEqual(ONE);
	});

	it("should accept: object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(ZERO);
	});

	it("should accept: object, object", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(ONE);
		expect(result).toEqual(ONE);
	});

	it("should accept: array, array", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(toArray(ZERO));
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: array, object", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = _performOperand("+", vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual(toArray(ZERO));
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: object, array, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(ZERO);
	});

	it("should accept: object, object, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: Vec2 = { x: 0, y: -10 };
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(ONE);
		expect(result).toEqual(ZERO);
	});

	it("should accept: array, array, object", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(ZERO);
	});

	it("should accept: array, object, object", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2 = { x: 0, y: 10 };
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(ZERO);
	});

	it("should accept: object, array, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: object, object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(ONE);
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: array, array, array", () => {
		const vec1: Vec2Array = [-1, -1];
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: typeof dest = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(toArray(MINUS_ONE));
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(ZERO));
	});

	it("should accept: array, object, array", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2Array = [1, 1];
		const dest: Vec2Array = [0, 10];
		const result: Vec2Array = _performOperand("+", vec1, vec2, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual(MINUS_ONE);
		expect(vec2).toEqual(toArray(ONE));
		expect(result).toEqual(toArray(ZERO));
	});
});
