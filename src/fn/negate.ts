import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Negate a vector.
 *
 * @param target - The target vector.
 * @returns - A reference to the modified target vector.
 */
export function negate<T extends Vec2Param>(target: T): T;
/**
 * Calculate vec2 absolute value.
 *
 * @param target - The target vector.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination vector.
 */
export function negate<T extends Vec2Param, D extends Vec2Param>(target: T, dest?: D): D;
export function negate<T extends Vec2Param, D extends Vec2Param>(target: T, dest?: D): unknown {
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

	if (typeof dest !== "undefined") {
		if (!isVec2LikeArray(dest) && !isVec2LikeObject(dest)) {
			throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
		}
	}

	const _dest = dest ?? target;

	if (isVec2LikeArray(_dest)) {
		_dest[0] = -tX;
		_dest[1] = -tY;
	}

	if (isVec2LikeObject(_dest)) {
		_dest.x = -tX;
		_dest.y = -tY;
	}

	return _dest;
}
