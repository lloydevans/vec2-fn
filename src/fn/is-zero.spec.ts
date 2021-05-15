import { expectType } from "ts-expect";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { Vec2 } from "../types/vec2";
import { isZero } from "./is-zero";

describe(isZero.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(isZero(ZERO));
	});

	it("should throw invalid input", () => {
		expect(() => isZero(null as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});

	it("should check isZero", () => {
		const vec1: Vec2 = { x: 1, y: 1 };
		const vec2: Vec2 = { x: 0, y: 0 };
		expect(isZero(vec1)).toEqual(false);
		expect(isZero(vec2)).toEqual(true);
	});

	it("should accept: object", () => {
		const vec1 = { x: 0, y: 0 };
		const result: boolean = isZero(vec1);
		expect(result).toEqual(true);
	});

	it("should accept: array", () => {
		const vec1: [number, number] = [0, 0];
		const result: boolean = isZero(vec1);
		expect(result).toEqual(true);
	});
});
