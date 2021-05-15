import { ERROR_MESSAGES } from "../constants/error-messages";
import { ONE } from "../constants/one";
import { testDoubleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { mod } from "./mod";

describe(mod.name, () => {
	it("should return inferred types", () => {
		testDoubleVecSig(mod);
	});

	it("should throw mod by zero", () => {
		expect(() => mod({ x: 1, y: 1 }, 0)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
		expect(() => mod([1, 1], 0)).toThrowError(ERROR_MESSAGES.DIVIDE_BY_ZERO);
	});

	it("should throw invalid input", () => {
		const vec1: [number, number] = [-1, -1];
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: Vec2 = { x: 0, y: 0 };
		expect(() => mod(null as any, vec2, dest)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => mod(vec1, null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => mod(vec1, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should mod value", () => {
		expect(mod({ x: 2.5, y: 2.5 }, { x: 2, y: 2 })).toEqual({ x: 0.5, y: 0.5 });
	});

	it("should return target", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = mod(vec1, vec2);
		expect(result).toBe(vec1);
	});

	it("should return target deep", () => {
		const vec1: Vec2 = { x: 1.5, y: 1.5 };
		const result: typeof vec1 = mod(mod(mod(vec1, ONE), ONE), ONE);
		expect(result).toEqual({ x: 0.5, y: 0.5 });
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		const result = mod(vec1, vec2, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec1: Vec2 = { x: 2.5, y: 2.5 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const result: Vec2 = mod(vec1, vec2);
		expect(result).toBe(vec1);
		expect(vec1).toEqual({ x: 0.5, y: 0.5 });
		expect(vec2).toEqual({ x: 2, y: 2 });
	});

	it("should modify destination", () => {
		const vec1: Vec2 = { x: 2.5, y: 2.5 };
		const vec2: Vec2 = { x: 2, y: 2 };
		const dest: typeof vec1 = { x: 0, y: 0 };
		mod(vec1, vec2, dest);
		expect(vec1).toEqual({ x: 2.5, y: 2.5 });
		expect(dest).toEqual({ x: 0.5, y: 0.5 });
	});
});
