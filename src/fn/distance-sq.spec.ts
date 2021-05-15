import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { distanceSq } from "./distance-sq";

describe(distanceSq.name, () => {
	it("should have correct signature", () => {
		expectType<number>(distanceSq([0, 0], [0, 0]));
	});

	it("should throw invalid input", () => {
		const vec: Vec2 = { x: 0, y: 0 };
		expect(() => distanceSq(null as any, vec)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => distanceSq(vec, null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should calculate distance squared", () => {
		expect(distanceSq([-2, 0], [0, 0])).toEqual(Math.pow(2, 2));
		expect(distanceSq([0, -2], [0, 0])).toEqual(Math.pow(2, 2));
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 0, y: 0 };
		const dest: [number, number] = [0, 0];
		const result = distanceSq(vec1, dest);
		expect(result).toEqual(0);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 0, y: 0 };
		const dest = { x: 0, y: 0 };
		const result = distanceSq(vec1, dest);
		expect(result).toBe(0);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [-2, 0];
		const dest: [number, number] = [0, 0];
		const result = distanceSq(vec1, dest);
		expect(result).toBe(Math.pow(2, 2));
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 0, y: 3 };
		const dest = { x: 0, y: 0 };
		const result = distanceSq(vec1, dest);
		expect(result).toBe(Math.pow(3, 2));
	});
});
