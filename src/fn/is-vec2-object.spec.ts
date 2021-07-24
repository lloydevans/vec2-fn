import { expectType } from "ts-expect";
import { ONE } from "../constants/one";
import { isVec2Object } from "./is-vec2-object";
import { toArray } from "./to-array";

describe(isVec2Object.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(isVec2Object(toArray(ONE)));
	});

	it("should check correctly", () => {
		expect(isVec2Object({ x: 0, y: 0 })).toBe(true);
		expect(isVec2Object([0, 0])).toBe(false);
		expect(isVec2Object(null)).toBe(false);
		expect(isVec2Object(0)).toBe(false);
		expect(isVec2Object("")).toBe(false);
	});
});
