import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { rotate } from "./rotate";
import { _toPrecision } from "./_to-precision";

describe(rotate.name, () => {
	it("should calculate angles", () => {
		for (let i = 0; i < 100; i++) {
			const phase = Math.random() - 0.5 * Math.PI * 2;
			const rAmount = Math.random() * Math.PI * 0.5;
			const to = { x: Math.cos(phase), y: Math.sin(phase) };
			const toR = { x: Math.cos(phase + rAmount), y: Math.sin(phase + rAmount) };
			const result = rotate(to, rAmount);
			result.x = _toPrecision(result.x);
			result.y = _toPrecision(result.y);
			toR.x = _toPrecision(toR.x);
			toR.y = _toPrecision(toR.y);
			expect(result).toEqual(toR);
		}
	});

	it("should have correct signature", () => {
		expectType<Vec2>(rotate({ x: 0, y: 0 }, 0));
		expectType<Vec2Array>(rotate([0, 0], 0));
		expectType<Vec2>(rotate([0, 0], 0, { x: 0, y: 0 }));
		expectType<Vec2Array>(rotate({ x: 0, y: 0 }, 0, [0, 0]));
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => rotate(null as any, 0)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => rotate(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_NUM);
		expect(() => rotate(vec1, 0, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should accept: object, number, array", () => {
		const vec1 = { x: 0, y: 0 };
		const dest: [number, number] = [0, 0];
		const result: [number, number] = rotate(rotate(vec1, 0), 0.1, dest);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(dest);
	});

	it("should accept: object, number, object", () => {
		const vec1 = { x: 0, y: 0 };
		const dest = { x: 0, y: 0 };
		const result: Vec2 = rotate(rotate(vec1, 0), 0.1, dest);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(dest);
	});

	it("should accept: array, number, array", () => {
		const vec1: [number, number] = [0, 0];
		const dest: [number, number] = [0, 0];
		const result: [number, number] = rotate(rotate(vec1, 0), 0.1, dest);
		expect(vec1).toEqual([0, 0]);
		expect(result).toBe(dest);
	});

	it("should accept: array, number, object", () => {
		const vec1 = { x: 0, y: 0 };
		const dest = { x: 0, y: 0 };
		const result: Vec2 = rotate(rotate(vec1, 0), 0.1, dest);
		expect(vec1).toEqual({ x: 0, y: 0 });
		expect(result).toBe(dest);
	});
});
