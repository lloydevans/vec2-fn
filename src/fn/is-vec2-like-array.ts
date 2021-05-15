import { Vec2Array } from "../types/vec2-array";

/**
 * Check whether a value is a vec2-like array.
 *
 * @param value - Input value to check.
 * @returns - Boolean result of whether the input is a vec2-like array.
 */
export function isVec2LikeArray<T extends number[] | unknown>(value: T): value is T extends Vec2Array ? Vec2Array<T> : never {
	return !!(Array.isArray(value) && typeof value[0] === "number" && typeof value[1] === "number");
}
