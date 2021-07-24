import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { min } from "./min";

describe(min.name, () => {
	it("should have correct function signature", () => {
		expect("Should implement").toBeTruthy();
	});

	it("should throw invalid input", () => {
		const dest: Vec2 = { x: 0, y: 0 };
		const vec2: Vec2 = { x: -1, y: -1 };
		expect(() => min(null as any, dest)).toThrowError(ERROR_MESSAGES.INV_V2_DEST);
		expect(() => min(dest, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
		expect(() => min(dest, vec2, null as any)).toThrowError(ERROR_MESSAGES.INV_V2_VAL);
	});

	it("should check min value", () => {
		const dest1: Vec2 = { x: 1000, y: 99 };
		const dest2: Vec2 = { x: 1000, y: 99 };
		const dest3: Vec2 = { x: 1, y: 0 };
		const vec4: Vec2 = { x: 100, y: 1.1 };
		expect(min(dest1, { x: 0, y: -1 }, { x: -10, y: 0 }, [0, 2.5], vec4)).toEqual({ x: -10, y: -1 });
		expect(min(dest2, { x: 0, y: -1 }, { x: -10, y: 0 }, [0, 2.5])).toEqual({ x: -10, y: -1 });
		expect(min(dest3, { x: 0, y: -1 }, { x: -10, y: 0 }, [0, 2.5])).toEqual({ x: -10, y: -1 });
	});

	it("should accept mixture of types", () => {
		const dest1: Vec2 = { x: 1000, y: 99 };
		const dest2: [number, number] = [1000, 99];
		const dest3: Vec2 = { x: 1, y: 0 };
		const vec1: [number, number] = [0, -1];
		const vec2: Vec2 = { x: -10, y: 0 };
		const vec3: Vec2Array = [0, 2.5];
		const vec4: Vec2 = { x: 100, y: 1.1 };
		expect(min(dest1, vec1, vec2, vec3, vec4)).toEqual({ x: -10, y: -1 });
		expect(min(dest2, vec1, vec2, vec3)).toEqual([-10, -1]);
		expect(min(dest3, vec2, vec3, vec4)).toEqual({ x: -10, y: 0 });
	});
});
