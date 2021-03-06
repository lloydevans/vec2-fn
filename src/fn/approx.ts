import { APPROX_THRESHOLD } from "../constants/approx-threshold";
import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Calculate whether two vectors are approximately equal.
 *
 * @param v1 - First vector for comparison.
 * @param v2 - Second vector for comparison.
 * @param precision - The precision difference in both values must be below.
 * @returns - Whether the vectors are approximately equal or not.
 */
export function approx(v1: Vec2Param, v2: Vec2Param, threshold: number = APPROX_THRESHOLD): boolean {
	let x2: number;
	let y2: number;
	if (isVec2Array(v1)) {
		x2 = v1[0];
		y2 = v1[1];
	} else if (isVec2Object(v1)) {
		x2 = v1.x;
		y2 = v1.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	let x1: number;
	let y1: number;
	if (isVec2Array(v2)) {
		x1 = v2[0];
		y1 = v2[1];
	} else if (isVec2Object(v2)) {
		x1 = v2.x;
		y1 = v2.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return Math.abs(x1 - x2) < threshold && Math.abs(y1 - y2) < threshold;
}
