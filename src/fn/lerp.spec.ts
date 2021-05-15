import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { lerp } from "./lerp";

describe(lerp.name, () => {
	it("should do linear interpolation of values", () => {
		const steps = 100;
		for (let i = 0; i < steps; i++) {
			const k = i / steps;
			expect(lerp([0, 0], [2, 1], k)).toEqual([k * 2, k]);
		}
	});

	it("should have correct signature", () => {
		expectType<Vec2>(lerp({ x: 0, y: 0 }, [0, 0], 1));
		expectType<Vec2Array>(lerp([0, 0], [1, 1], 1));
		expectType<Vec2>(lerp([0, 0], [1, 1], 1, { x: 0, y: 0 }));
		expectType<Vec2Array>(lerp({ x: 0, y: 0 }, [0, 0], 1, [0, 0]));
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => lerp(null as any, vec1, 0)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => lerp(vec1, null as any, 0)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => lerp(vec1, [0, 0], null as any)).toThrowError(ERROR_MESSAGES.INV_NUM);
	});

	it("should use optional destination", () => {
		const vec1 = { x: 0, y: 0 };
		const dest: [number, number] = [0, 0];
		const result: [number, number] = lerp(vec1, [0, 0], 0, dest);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(dest);
	});

	it("should accept: object, number, array", () => {
		const vec1 = { x: 0, y: 0 };
		const result: Vec2 = lerp(vec1, [0, 0], 0);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(vec1);
	});

	it("should accept: object, number, object", () => {
		const vec1 = { x: 0, y: 0 };
		const result: Vec2 = lerp(vec1, [0, 0], 0);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(vec1);
	});

	it("should accept: array, number, array", () => {
		const vec1: [number, number] = [0, 0];
		const result: [number, number] = lerp(vec1, [0, 0], 0);
		expect(vec1).toEqual([0, 0]);
		expect(result).toBe(vec1);
	});

	it("should accept: array, number, object", () => {
		const vec1 = { x: 0, y: 0 };
		const result: Vec2 = lerp(vec1, [0, 0], 0);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(vec1);
	});
});
