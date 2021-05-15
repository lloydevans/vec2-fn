import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { ONE } from "../constants/one";
import { Vec2 } from "../types/vec2";
import { isOne } from "./is-one";

describe(isOne.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(isOne(ONE));
	});

	it("should throw invalid input", () => {
		expect(() => isOne(null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should check isOne", () => {
		const vec1: Vec2 = { x: 0, y: 0 };
		const vec2: Vec2 = { x: 1, y: 1 };
		expect(isOne(vec1)).toEqual(false);
		expect(isOne(vec2)).toEqual(true);
	});

	it("should accept: object", () => {
		const vec1 = { x: 1, y: 1 };
		const result: boolean = isOne(vec1);
		expect(result).toEqual(true);
	});

	it("should accept: array", () => {
		const vec1: [number, number] = [1, 1];
		const result: boolean = isOne(vec1);
		expect(result).toEqual(true);
	});
});
