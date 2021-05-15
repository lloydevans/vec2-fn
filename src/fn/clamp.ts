import { Vec2Param } from "../types/vec2-param";
import { copy } from "./copy";
import { max } from "./max";
import { min } from "./min";

/**
 * Clamp a vector by min and max limits.
 *
 * @param vecMin - Minimum vector.
 * @param vecMax - Maximum vector.
 * @param target - Target object.
 * @returns - A reference to the modified target object.
 */
export function clamp<T extends Vec2Param, Min extends Vec2Param, Max extends Vec2Param>(target: T, vecMin: Min | number, vecMax: Max | number): T;
/**
 * Clamp a vector by min and max limits.
 *
 * @param vecMin - Minimum vector.
 * @param vecMax - Maximum vector.
 * @param target - Target object.
 * @param dest - Destination object to store the values.
 * @returns - A reference to the modified destination object.
 */
export function clamp<T extends Vec2Param, Min extends Vec2Param, Max extends Vec2Param, D extends Vec2Param>(target: T, vecMin: Min | number, vecMax: Max | number, dest?: D): D;
export function clamp<T extends Vec2Param, Min extends Vec2Param, Max extends Vec2Param, D extends Vec2Param>(target: T, vecMin: Min | number, vecMax: Max | number, dest?: D): unknown {
	let result;

	if (dest) {
		copy(target, dest);
		result = max(min(dest, vecMax), vecMin);
	} else {
		result = max(min(target, vecMax), vecMin);
	}

	return result;
}
