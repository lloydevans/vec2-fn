import { ERROR_MESSAGES } from "../constants/error-messages";
import { testTripleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { clamp } from "./clamp";

describe(clamp.name, () => {
	it("should return inferred types", () => {
		testTripleVecSig(clamp);
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2: Vec2 = { x: 0, y: 0 };
		const dest: Vec2 = { x: 0, y: 0 };
		expect(() => clamp(vec1, null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => clamp(vec1, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
	});

	it("should clamp values", () => {
		const vMin: Vec2 = { x: -1, y: -1 };
		const vMax: Vec2 = { x: 1, y: 1 };
		const dest: Vec2 = { x: -2, y: 2 };
		expect(clamp(dest, vMin, vMax)).toEqual({ x: -1, y: 1 });
	});

	it("should modify target", () => {
		const vMin: Vec2 = { x: -1, y: -1 };
		const vMax: Vec2 = { x: 1, y: 1 };
		const target: Vec2 = { x: -2, y: 2 };
		const result: Vec2 = clamp(target, vMin, vMax);
		expect(result).toBe(target);
		expect(target).toEqual({ x: -1, y: 1 });
	});

	it("should modify destination", () => {
		const vMin: Vec2 = { x: -1, y: -1 };
		const vMax: Vec2 = { x: 1, y: 1 };
		const target: Vec2 = { x: -2, y: 2 };
		const dest: Vec2 = { x: 0, y: 0 };
		const result: Vec2 = clamp(target, vMin, vMax, dest);
		expect(result).toBe(dest);
		expect(dest).toEqual({ x: -1, y: 1 });
	});

	it("should accept mixture of types", () => {
		const vecMin: [number, number] = [-100, -1];
		const vecMax: Vec2 = { x: -10, y: 0 };
		expect(clamp({ x: -1000, y: -10 }, vecMin, vecMax)).toEqual({ x: -100, y: -1 });
		expect(clamp([-1000, 99], vecMin, vecMax)).toEqual([-100, 0]);
		expect(clamp({ x: 1, y: 0 }, vecMin, vecMax)).toEqual({ x: -10, y: 0 });
	});
});
