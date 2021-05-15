import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { length } from "./length";

describe(length.name, () => {
	it("should have correct signature", () => {
		expectType<number>(length([0, 0]));
	});

	it("should throw invalid input", () => {
		expect(() => length(null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should calculate length", () => {
		expect(length([0, 0])).toEqual(0);
		expect(length([1.3, 3.3])).toEqual(3.5468295701936396);
		expect(length([1, 4.1])).toEqual(4.220189569201838);
	});

	it("should accept: object", () => {
		const vec1 = { x: 0, y: 0 };
		const result = length(vec1);
		expect(result).toEqual(0);
	});

	it("should accept: array", () => {
		const vec1: [number, number] = [0, 0];
		const result = length(vec1);
		expect(result).toBe(0);
	});
});
