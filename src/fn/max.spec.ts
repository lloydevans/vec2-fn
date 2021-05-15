import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { max } from "./max";

describe(max.name, () => {
	it("should have correct function signature", () => {
		expect("Should implement").toBeTruthy();
	});

	it("should throw invalid input", () => {
		const vec1: Vec2 = { x: -1, y: -1 };
		const vec2: Vec2 = { x: -1, y: -1 };
		expect(() => max(null as any, vec1)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
		expect(() => max(vec1, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => max(vec1, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
	});

	it("should check max value", () => {
		const dest1: Vec2 = { x: -1000, y: 99 };
		const dest2: Vec2 = { x: -1000, y: 99 };
		const dest3: Vec2 = { x: 1, y: 0 };
		const vec1: Vec2 = { x: 0, y: -1 };
		const vec2: Vec2 = { x: -10, y: 0 };
		const vec3: Vec2Array = [0, 2.5];
		const vec4: Vec2Array = [100, 1.1];
		expect(max(dest1, vec1, vec2, vec3, vec4)).toEqual({ x: 100, y: 99 });
		expect(max(dest2, vec1, vec2, vec3)).toEqual({ x: 0, y: 99 });
		expect(max(dest3, vec1, vec2, vec3)).toEqual({ x: 1, y: 2.5 });
	});

	it("should accept mixture of types", () => {
		const dest1: Vec2 = { x: -1000, y: 99 };
		const dest2: [number, number] = [-1000, 99];
		const dest3: Vec2 = { x: 1, y: 0 };
		const vec1: [number, number] = [0, -1];
		const vec2: Vec2 = { x: -10, y: 0 };
		const vec3: Vec2Array = [0, 2.5];
		const vec4: Vec2Array = [100, 1.1];
		expect(max(dest1, vec1, vec2, vec3, vec4)).toEqual({ x: 100, y: 99 });
		expect(max(dest2, vec1, vec2, vec3)).toEqual([0, 99]);
		expect(max(dest3, vec1, vec2, vec3)).toEqual({ x: 1, y: 2.5 });
	});
});
