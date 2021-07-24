import { Vec2Param } from "../types/vec2-param";
import { copy } from "./copy";
import { max } from "./max";
import { min } from "./min";

/**
 * Clamp a vector by min and max limits.
 *
 * @param vMin - Minimum vector.
 * @param vMax - Maximum vector.
 * @param target - Target object.
 * @returns - A reference to the modified target object.
 */
export function clamp<T extends Vec2Param>(target: T, vMin: Vec2Param | number, vMax: Vec2Param | number): T;
/**
 * Clamp a vector by min and max limits.
 *
 * @param vMin - Minimum vector.
 * @param vMax - Maximum vector.
 * @param target - Target object.
 * @param dest - Destination object to store the values.
 * @returns - A reference to the modified destination object.
 */
export function clamp<D extends Vec2Param>(target: Vec2Param, vMin: Vec2Param | number, vMax: Vec2Param | number, dest: D): D;
export function clamp<D extends Vec2Param>(target: Vec2Param, vMin: Vec2Param | number, vMax: Vec2Param | number, dest?: D): unknown {
	if (typeof dest === "undefined") {
		max(target, target, vMin);
		min(target, target, vMax);
		return target;
	} else {
		copy(target, dest);
		max(dest, dest, vMin);
		min(dest, dest, vMax);
		return dest;
	}
}
