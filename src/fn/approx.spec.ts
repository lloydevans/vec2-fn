import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { Vec2 } from "../types/vec2";
import { approx } from "./approx";

describe(approx.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(approx(ZERO, [0, 0]));
	});

	it("should throw invalid to", () => {
		const vec2: Vec2 = { x: 2, y: 2 };
		expect(() => approx(null as any, vec2)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should throw invalid from", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => approx(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should check approx equal", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2: Vec2 = { x: 0, y: 0.0000000001 };
		const vec3: Vec2 = { x: 0, y: 0.0000001 };
		expect(approx(vec1, vec2)).toEqual(true);
		expect(approx(vec1, vec3)).toEqual(false);
	});

	it("should accept: custom threshold", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2: [number, number] = [0, 0.0000001];
		const result: boolean = approx(vec1, vec2, 0.00000001);
		expect(result).toEqual(false);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2: [number, number] = [0, 0.0000000001];
		const result: boolean = approx(vec1, vec2);
		expect(result).toEqual(true);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2 = { x: 0, y: 0.0000000001 };
		const result: boolean = approx(vec1, vec2);
		expect(result).toEqual(true);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [0, 0];
		const vec2: [number, number] = [0, 0.0000000001];
		const result: boolean = approx(vec1, vec2);
		expect(result).toEqual(true);
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 0, y: 0 };
		const vec2 = { x: 0, y: 0.0000000001 };
		const result: boolean = approx(vec1, vec2);
		expect(result).toEqual(true);
	});
});
