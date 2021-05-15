import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { lengthSq } from "./length-sq";

describe(lengthSq.name, () => {
	it("should have correct signature", () => {
		expectType<number>(lengthSq([0, 0]));
	});

	it("should throw invalid input", () => {
		expect(() => lengthSq(null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should calculate lengthSq", () => {
		expect(lengthSq([0, 0])).toEqual(0);
		expect(lengthSq([1.3, 3.3]).toFixed(8)).toEqual(Math.pow(3.5468295701936396, 2).toFixed(8));
		expect(lengthSq([1, 4.1]).toFixed(8)).toEqual(Math.pow(4.220189569201838, 2).toFixed(8));
	});

	it("should accept: object", () => {
		const vec1 = { x: 0, y: 0 };
		const result = lengthSq(vec1);
		expect(result).toEqual(0);
	});

	it("should accept: array", () => {
		const vec1: [number, number] = [0, 0];
		const result = lengthSq(vec1);
		expect(result).toBe(0);
	});
});
