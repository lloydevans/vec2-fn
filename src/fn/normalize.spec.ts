import { ERROR_MESSAGES } from "../constants/error-messages";
import { testSingleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { normalize } from "./normalize";

describe(normalize.name, () => {
	it("should return inferred types", () => {
		testSingleVecSig(normalize);
	});

	it("should throw invalid input", () => {
		const dest: Vec2 = { x: 0, y: 0 };
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => normalize(null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => normalize(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should normalize values", () => {
		expect(normalize({ x: 2, y: 0 })).toEqual({ x: 1, y: 0 });
		expect(normalize({ x: 0, y: 2 })).toEqual({ x: 0, y: 1 });
	});

	it("should modify destination", () => {
		const vec1 = { x: 2, y: 0 };
		const dest = { x: 0, y: 0 };
		normalize(vec1, dest);
		expect(vec1).toEqual({ x: 2, y: 0 });
		expect(dest).toEqual({ x: 1, y: 0 });
	});

	it("should return target", () => {
		const vec1 = { x: 2, y: 0 };
		const result = normalize(vec1);
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1 = { x: 2, y: 0 };
		const dest: [number, number] = [0, 0];
		const result = normalize(vec1, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec = { x: 2, y: 0 };
		normalize(vec);
		expect(vec).toEqual({ x: 1, y: 0 });
	});

	it("should modify destination", () => {
		const vec1 = { x: 2, y: 0 };
		const dest = { x: 0, y: 0 };
		normalize(vec1, dest);
		expect(vec1).toEqual({ x: 2, y: 0 });
		expect(dest).toEqual({ x: 1, y: 0 });
	});

	it("should accept array", () => {
		const vec1: [number, number] = [2, 0];
		const result = normalize(vec1);
		expect(result).toBe(vec1);
		expect(result).toEqual([1, 0]);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: 2, y: 0 };
		const dest: [number, number] = [0, 0];
		const result = normalize(vec1, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual({ x: 2, y: 0 });
		expect(result).toEqual([1, 0]);
	});

	it("should accept: object, object", () => {
		const vec1 = { x: 2, y: 0 };
		const dest = { x: 0, y: 0 };
		const result = normalize(vec1, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual({ x: 2, y: 0 });
		expect(result).toEqual({ x: 1, y: 0 });
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [0, -2];
		const dest: [number, number] = [0, 0];
		const result = normalize(vec1, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual([0, -2]);
		expect(result).toEqual([0, -1]);
	});

	it("should accept: array, object", () => {
		const vec1 = { x: 2, y: 0 };
		const dest = { x: 0, y: 0 };
		const result = normalize(vec1, dest);
		expect(result).toBe(dest);
		expect(vec1).toEqual({ x: 2, y: 0 });
		expect(result).toEqual({ x: 1, y: 0 });
	});
});
