import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { Vec2 } from "../types/vec2";
import { equal } from "./equal";

describe(equal.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(equal(ZERO, [0, 0]));
	});

	it("should throw invalid input", () => {
		const vec: Vec2 = { x: 0, y: 0 };
		expect(() => equal(null as any, vec)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => equal(vec, null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should check equal", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2: Vec2 = { x: 0, y: 0.1 };
		const vec3: Vec2 = { x: 0, y: 0 };
		expect(equal(vec1, vec2)).toEqual(false);
		expect(equal(vec1, vec3)).toEqual(true);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2: [number, number] = [0, 0.000000001];
		const result: boolean = equal(vec1, vec2);
		expect(result).toEqual(false);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2 = { x: 0, y: 0.0000000001 };
		const result: boolean = equal(vec1, vec2);
		expect(result).toEqual(false);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [0, 0];
		const vec2: [number, number] = [0, 0.000000001];
		const result: boolean = equal(vec1, vec2);
		expect(result).toEqual(false);
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2 = { x: 0, y: 0.1 };
		const result: boolean = equal(vec1, vec2);
		expect(result).toEqual(false);
	});

	it("should accept: object, number", () => {
		const vec1 = { x: 0, y: 0 };
		const result: boolean = equal(vec1, 0);
		expect(result).toEqual(true);
	});
});
