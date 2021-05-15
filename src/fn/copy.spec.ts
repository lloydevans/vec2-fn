import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { copy } from "./copy";

describe(copy.name, () => {
	it("should have correct signature", () => {
		expectType<[number, number]>(copy([0, 0], [0, 0]));
		expectType<Vec2>(copy([0, 0], { x: 0, y: 0 }));
	});

	it("should throw invalid input", () => {
		const vec: Vec2 = { x: 0, y: 0 };
		expect(() => copy(null as any, vec)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => copy(vec, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should calculate copy", () => {
		expect(copy([-1, 0], [0, 0])).toEqual([-1, 0]);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 0, y: 0 };
		const dest: [number, number] = [1, 1];
		const result = copy(vec1, dest);
		expect(result).toEqual([0, 0]);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 0, y: 0 };
		const dest = { x: 1, y: 1 };
		const result = copy(vec1, dest);
		expect(result).toEqual({ x: 0, y: 0 });
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [-2, 0];
		const dest: [number, number] = [0, 0];
		const result = copy(vec1, dest);
		expect(result).toEqual([-2, 0]);
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 0, y: 3 };
		const dest = { x: 0, y: 0 };
		const result = copy(vec1, dest);
		expect(result).toEqual( { x: 0, y: 3 });
	});
});
