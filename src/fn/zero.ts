import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Set vector to zero.
 *
 * @param target - Target Vec2-like object the values will be written to.
 * @returns - A reference to the object the result was written to.
 */
export function zero<T extends Vec2Param>(target: T): T {
	if (isVec2Object(target)) {
		target.x = 0;
		target.y = 0;
	} else if (isVec2Array(target)) {
		target[0] = 0;
		target[1] = 0;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return target;
}
