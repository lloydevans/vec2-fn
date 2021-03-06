import { Vec2 } from "../types/vec2";
import { Vec2Param } from "../types/vec2-param";

type Vec2Object<T extends Vec2 = Vec2> = T;

/**
 * Check whether a value is a vec2-like object.
 *
 * @param value - Input value to check.
 * @returns - Boolean result of whether the input is a vec2-like object.
 */
export function isVec2Object<T extends Vec2Param | unknown>(value: T): value is T extends Vec2 ? Vec2Object<T> : never {
	return !!(value && typeof value === "object" && typeof (value as Vec2).x === "number" && typeof (value as Vec2).y === "number");
}
