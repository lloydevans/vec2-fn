import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

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
	if (isVec2Array(from)) {
		tX = from[0];
		tY = from[1];
	} else if (isVec2Object(from)) {
		tX = from.x;
		tY = from.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	let vX: number;
	let vY: number;
	if (isVec2Array(to)) {
		vX = to[0];
		vY = to[1];
	} else if (isVec2Object(to)) {
		vX = to.x;
		vY = to.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	const x = tX - vX;
	const y = tY - vY;
	return x * x + y * y;
}
