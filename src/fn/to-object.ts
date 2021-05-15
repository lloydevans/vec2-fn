import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { isVec2LikeArray } from "./is-vec2-like-array";

/**
 * Convert a vec2-like array to an object.
 *
 * @param vec1 - input vec2-like array.
 * @returns - Newly created Vec2 object.
 */
export function toObject<T extends Vec2Array>(target: T): Vec2 {
	if (isVec2LikeArray(target)) {
		return { x: target[0], y: target[1] };
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_ARR);
	}
}
