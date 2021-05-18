import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { Vec2 } from "../types/vec2";
import { angleTo } from "./angle-to";
import { _toPrecision } from "./_to-precision";

describe(angleTo.name, () => {
	it("should calculate angles", () => {
		for (let i = 0; i < 100; i++) {
			const phase = Math.random() - 0.5 * Math.PI * 2;
			const to = { x: Math.cos(phase), y: Math.sin(phase) };
			const result = _toPrecision(angleTo(to));
			expect(result).toEqual(_toPrecision(phase));
		}
	});

	it("should have correct signature", () => {
		expectType<number>(angleTo(ZERO, [1, -1]));
	});

	it("should throw invalid to", () => {
		const vec2: Vec2 = { x: 2, y: 2 };
		expect(() => angleTo(null as any, vec2)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should throw invalid from", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => angleTo(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: -1, y: 0 };
		const vec2: [number, number] = [0, 0];
		const result: number = angleTo(vec1, vec2);
		expect(vec1).toEqual({ x: -1, y: 0 });
		expect(result).toEqual(Math.PI);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: -1, y: 0 };
		const vec2 = { x: 0, y: 0 };
		const result: number = angleTo(vec1, vec2);
		expect(vec1).toEqual({ x: -1, y: 0 });
		expect(result).toEqual(Math.PI);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [-1, 0];
		const vec2: [number, number] = [0, 0];
		const result: number = angleTo(vec1, vec2);
		expect(vec1).toEqual([-1, 0]);
		expect(result).toEqual(Math.PI);
	});

	it("should accept: array, object", () => {
		const vec1 = { x: -1, y: 0 };
		const vec2 = { x: 0, y: 0 };
		const result: number = angleTo(vec1, vec2);
		expect(vec1).toEqual({ x: -1, y: 0 });
		expect(result).toEqual(Math.PI);
	});
});
