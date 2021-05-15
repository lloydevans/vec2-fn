import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { dotPerp } from "./dot-perp";

describe(dotPerp.name, () => {
	it("should have correct signature", () => {
		expectType<number>(dotPerp([0, 0], [0, 0]));
	});

	it("should throw invalid input", () => {
		const vec: Vec2 = { x: 0, y: 0 };
		expect(() => dotPerp(null as any, vec)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => dotPerp(vec, null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should calculate perpendicular dot product", () => {
		expect(dotPerp([0, 0], [0, 0])).toEqual(0);
		expect(dotPerp([1.3, 3.3], [100, 1.1])).toEqual(-328.57);
		expect(dotPerp([1, 4.1], [-1.8, 2.2])).toEqual(9.58);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 0, y: 0 };
		const dest: [number, number] = [0, 0];
		const result = dotPerp(vec1, dest);
		expect(result).toEqual(0);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 0, y: 0 };
		const dest = { x: 0, y: 0 };
		const result = dotPerp(vec1, dest);
		expect(result).toBe(0);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [0, 0];
		const dest: [number, number] = [0, 0];
		const result = dotPerp(vec1, dest);
		expect(result).toBe(0);
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 0, y: 0 };
		const dest = { x: 0, y: 0 };
		const result = dotPerp(vec1, dest);
		expect(result).toBe(0);
	});
});
