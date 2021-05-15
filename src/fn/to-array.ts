import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Convert a vec2-like object to an array.
 *
 * @param vec1 - input vec2-like object.
 * @returns - Newly created array.
 */
export function toArray<T extends Vec2>(target: T): Vec2Array {
	if (isVec2LikeObject(target)) {
		return [target.x, target.y];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}
}
