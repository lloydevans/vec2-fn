import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Check whether two vectors are exactly equal to system precision.
 *
 * @param target - Target vector.
 * @param value - Value vector.
 * @returns - Boolean result of whether the vectors are equal.
 */
export function equal(target: Vec2Param, value: Vec2Param | number): boolean {
	let tX: number;
	let tY: number;
	if (isVec2Object(target)) {
		tX = target.x;
		tY = target.y;
	} else if (isVec2Array(target)) {
		tX = target[0];
		tY = target[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	let vX: number;
	let vY: number;
	if (typeof value === "number") {
		vX = value;
		vY = value;
	} else if (isVec2Object(value)) {
		vX = value.x;
		vY = value.y;
	} else if (isVec2Array(value)) {
		vX = value[0];
		vY = value[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return tX === vX && tY === vY;
}
