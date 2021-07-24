import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Get the squared length of a vector.
 *
 * @param vec - The input vector.
 * @returns - The number result of the squared vector length.
 */
export function lengthSq(vec: Vec2Param): number {
	let x: number;
	let y: number;

	if (isVec2Object(vec)) {
		x = vec.x;
		y = vec.y;
	} else if (isVec2Array(vec)) {
		x = vec[0];
		y = vec[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return x * x + y * y;
}
