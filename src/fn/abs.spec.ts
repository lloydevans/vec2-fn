import { ERROR_MESSAGES } from "../constants/error-messages";
import { ONE } from "../constants/one";
import { testSingleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { abs } from "./abs";
import { toArray } from "./to-array";

describe(abs.name, () => {
	it("should return inferred types", () => {
		testSingleVecSig(abs);
	});

	it("should throw invalid target", () => {
		const dest: Vec2 = { x: 0, y: 0 };
		const vec1: Vec2 = { x: -1, y: -1 };
		expect(() => abs(null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_TARG);
		expect(() => abs(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
	});

	it("should make values positive", () => {
		expect(abs({ x: -1, y: -1 })).toEqual({ x: 1, y: 1 });
	});

	it("should pass through positive", () => {
		expect(abs({ x: 1, y: 1 })).toEqual({ x: 1, y: 1 });
	});

	it("should modify destination", () => {
		const vec = { x: -1, y: -1 };
		const dest = { x: 0, y: 0 };
		abs(vec, dest);

		expect(vec).toEqual({ x: -1, y: -1 });
		expect(dest).toEqual({ x: 1, y: 1 });
	});

	it("should return target", () => {
		const vec1 = { x: -1, y: -1 };
		const result = abs(vec1);
		expect(result).toBe(vec1);
	});

	it("should return destination", () => {
		const vec1 = { x: -1, y: -1 };
		const dest = { x: 0, y: 0 };
		const result = abs(vec1, dest);
		expect(result).toBe(dest);
	});

	it("should modify instance", () => {
		const vec = { x: -1, y: -1 };
		abs(vec);

		expect(vec).toEqual({ x: 1, y: 1 });
	});

	it("should modify destination", () => {
		const vec1 = { x: -1, y: -1 };
		const dest = { x: 0, y: 0 };
		abs(vec1, dest);

		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(dest).toEqual({ x: 1, y: 1 });
	});

	it("should accept array", () => {
		const vec1: [number, number] = [-1, -1];
		const result = abs(vec1);

		expect(result).toBe(vec1);
		expect(result).toEqual([1, 1]);
	});

	it("should accept: object, array", () => {
		const vec1 = { x: -1, y: -1 };
		const dest: [number, number] = [0, 0];
		const result = abs(vec1, dest);

		expect(result).toBe(dest);
		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(result).toEqual(toArray(ONE));
	});

	it("should accept: object, object", () => {
		const vec1 = { x: -1, y: -1 };
		const dest = { x: 0, y: 0 };
		const result = abs(vec1, dest);

		expect(result).toBe(dest);
		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(result).toEqual(ONE);
	});

	it("should accept: array, array", () => {
		const vec1: [number, number] = [-1, -1];
		const dest: [number, number] = [0, 0];
		const result = abs(vec1, dest);

		expect(result).toBe(dest);
		expect(vec1).toEqual([-1, -1]);
		expect(result).toEqual(toArray(ONE));
	});

	it("should accept: array, object", () => {
		const vec1 = { x: -1, y: -1 };
		const dest = { x: 0, y: 0 };
		const result = abs(vec1, dest);

		expect(result).toBe(dest);
		expect(vec1).toEqual({ x: -1, y: -1 });
		expect(result).toEqual(ONE);
	});
});
