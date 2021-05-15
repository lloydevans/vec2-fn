import { expectType } from "ts-expect";
import { ONE } from "../constants/one";
import { isVec2LikeObject } from "./is-vec2-like-object";
import { toArray } from "./to-array";

describe(isVec2LikeObject.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(isVec2LikeObject(toArray(ONE)));
	});

	it("should check correctly", () => {
		expect(isVec2LikeObject({ x: 0, y: 0 })).toBe(true);
		expect(isVec2LikeObject([0, 0])).toBe(false);
		expect(isVec2LikeObject(null)).toBe(false);
		expect(isVec2LikeObject(0)).toBe(false);
		expect(isVec2LikeObject("")).toBe(false);
	});
});
