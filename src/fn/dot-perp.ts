import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Calculate the perpendicular dot product of two vectors.
 *
 * @param v1 - Vector 1.
 * @param v2 = Vector 2.
 * @returns - Number result of the perpendicular dot product.
 */
export function dotPerp(v1: Vec2Param, v2: Vec2Param): number {
	let x1: number;
	let y1: number;
	let x2: number;
	let y2: number;

	if (isVec2LikeObject(v1)) {
		x1 = v1.x;
		y1 = v1.y;
	} else if (isVec2LikeArray(v1)) {
		x1 = v1[0];
		y1 = v1[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	if (isVec2LikeObject(v2)) {
		x2 = v2.x;
		y2 = v2.y;
	} else if (isVec2LikeArray(v2)) {
		x2 = v2[0];
		y2 = v2[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return x1 * y2 - y1 * x2;
}
