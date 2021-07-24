import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Get the squared distance between two vectors.
 *
 * @param from - From vector.
 * @param to - To vector.
 * @returns - Number distance squared result.
 */
export function distanceSq(from: Vec2Param, to: Vec2Param): number {
	let tX: number;
	let tY: number;
	if (isVec2LikeArray(from)) {
		tX = from[0];
		tY = from[1];
	} else if (isVec2LikeObject(from)) {
		tX = from.x;
		tY = from.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	let vX: number;
	let vY: number;
	if (isVec2LikeArray(to)) {
		vX = to[0];
		vY = to[1];
	} else if (isVec2LikeObject(to)) {
		vX = to.x;
		vY = to.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	const x = tX - vX;
	const y = tY - vY;
	return x * x + y * y;
}
