import { ERROR_MESSAGES } from "../constants/error-messages";
import { ZERO } from "../constants/zero";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Calculate angle.
 *
 * @param to - Vector to calculate to.
 * @param from - Vector to calculate from. Defaults to `ZERO`.
 * @returns - Number angle result.
 */
export function angleTo(to: Vec2Param, from: Vec2Param = ZERO): number {
	let x2: number;
	let y2: number;
	if (isVec2LikeArray(to)) {
		x2 = to[0];
		y2 = to[1];
	} else if (isVec2LikeObject(to)) {
		x2 = to.x;
		y2 = to.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	let x1: number;
	let y1: number;
	if (isVec2LikeArray(from)) {
		x1 = from[0];
		y1 = from[1];
	} else if (isVec2LikeObject(from)) {
		x1 = from.x;
		y1 = from.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return Math.atan2(y2 - y1, x2 - x1);
}
