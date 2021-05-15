import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Check whether two vectors are exactly equal to system precision.
 *
 * @param target - Target vector.
 * @param value - Value vector.
 * @returns - Boolean result of whether the vectors are equal.
 */
export function equal<T extends Vec2Param, V extends Vec2Param>(target: T, value: V | number): boolean {
	let tX: number;
	let tY: number;
	if (isVec2LikeArray(target)) {
		tX = target[0];
		tY = target[1];
	} else if (isVec2LikeObject(target)) {
		tX = target.x;
		tY = target.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	let vX: number;
	let vY: number;
	if (typeof value === "number") {
		vX = value;
		vY = value;
	} else if (isVec2LikeArray(value)) {
		vX = value[0];
		vY = value[1];
	} else if (isVec2LikeObject(value)) {
		vX = value.x;
		vY = value.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2);
	}

	return tX === vX && tY === vY;
}
