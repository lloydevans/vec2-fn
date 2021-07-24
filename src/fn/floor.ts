import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Floor the values of a vector.
 *
 * @param target - The target vector.
 * @returns - A reference to the modified target vector.
 */
export function floor<T extends Vec2Param>(target: T): T;
/**
 * Floor the values of a vector.
 *
 * @param target - The target vector.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination vector.
 */
export function floor<D extends Vec2Param>(target: Vec2Param, dest: D): D;
export function floor<D extends Vec2Param>(target: Vec2Param, dest?: D): unknown {
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

	if (typeof dest !== "undefined") {
		if (!isVec2Object(dest) && !isVec2Array(dest)) {
			throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
		}
	}

	const _dest = dest ?? target;

	if (isVec2Object(_dest)) {
		_dest.x = Math.floor(tX);
		_dest.y = Math.floor(tY);
	} else if (isVec2Array(_dest)) {
		_dest[0] = Math.floor(tX);
		_dest[1] = Math.floor(tY);
	}

	return _dest;
}
