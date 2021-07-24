import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Get the squared length of a vector.
 *
 * @param vec - The input vector.
 * @returns - The number result of the squared vector length.
 */
export function lengthSq(vec: Vec2Param): number {
	let x: number;
	let y: number;

	if (isVec2LikeObject(vec)) {
		x = vec.x;
		y = vec.y;
	} else if (isVec2LikeArray(vec)) {
		x = vec[0];
		y = vec[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return x * x + y * y;
}
