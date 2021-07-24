import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2 } from "../types/vec2";
import { Vec2Array } from "../types/vec2-array";
import { isVec2Array } from "./is-vec2-array";

/**
 * Convert a vec2-like array to an object.
 *
 * @param vec1 - input vec2-like array.
 * @returns - Newly created Vec2 object.
 */
export function toObject(target: Vec2Array): Vec2 {
	if (isVec2Array(target)) {
		return { x: target[0], y: target[1] };
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_ARR);
	}
}
