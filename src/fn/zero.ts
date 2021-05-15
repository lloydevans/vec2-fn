import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Set vector to zero.
 *
 * @param target - Target Vec2-like object the values will be written to.
 * @returns - A reference to the object the result was written to.
 */
export function zero<T extends Vec2Param>(target: T): T {
	if (isVec2LikeObject(target)) {
		target.x = 0;
		target.y = 0;
	} else if (isVec2LikeArray(target)) {
		target[0] = 0;
		target[1] = 0;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return target;
}
