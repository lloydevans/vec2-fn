import { expectType } from "ts-expect";
import { ONE } from "../constants/one";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { toArray } from "./to-array";

describe(isVec2LikeArray.name, () => {
	it("should have correct signature", () => {
		expectType<boolean>(isVec2LikeArray(toArray(ONE)));
	});

	it("should check correctly", () => {
		expect(isVec2LikeArray([0, 0])).toBe(true);
		expect(isVec2LikeArray({ x: 0, y: 0 })).toBe(false);
		expect(isVec2LikeArray(null)).toBe(false);
		expect(isVec2LikeArray(0)).toBe(false);
		expect(isVec2LikeArray("")).toBe(false);
	});
});
