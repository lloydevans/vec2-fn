import { testDoubleVecSig } from "../test/utils";
import { Vec2 } from "../types/vec2";
import { subtract } from "./subtract";

describe(subtract.name, () => {
	it("should return inferred types", () => {
		testDoubleVecSig(subtract);
	});

	it("should subtract value", () => {
		expect(subtract({ x: -1, y: -1 }, { x: 1, y: 1 })).toEqual({ x: -2, y: -2 });
	});

	it("should return target", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: 1, y: 1 };
		const result: typeof vec1 = subtract(vec1, vec2);
		expect(result).toBe(vec1);
	});
});
