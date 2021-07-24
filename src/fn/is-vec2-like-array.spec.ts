import { expectType } from "ts-expect";
import { ONE } from "../constants/one";
import { isVec2Array } from "./is-vec2-array";
import { toArray } from "./to-array";

describe(isVec2Array.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(isVec2Array(toArray(ONE)));
	});

	it("should check correctly", () => {
		expect(isVec2Array([0, 0])).toBe(true);
		expect(isVec2Array({ x: 0, y: 0 })).toBe(false);
		expect(isVec2Array(null)).toBe(false);
		expect(isVec2Array(0)).toBe(false);
		expect(isVec2Array("")).toBe(false);
	});
});
