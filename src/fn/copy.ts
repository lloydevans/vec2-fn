import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Copy one vectors values to another.
 *
 * @param target - Target to be copied from.
 * @param dest - The destination object.
 * @returns - The destination object reference.
 */
export function copy<D extends Vec2Param>(target: Vec2Param, dest: D): D {
	let tX: number;
	let tY: number;
	if (isVec2Object(target)) {
		tX = target.x;
		tY = target.y;
	} else if (isVec2Array(target)) {
		tX = target[0];
		tY = target[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_TARG);
	}

	if (isVec2Object(dest)) {
		dest.x = tX;
		dest.y = tY;
	} else if (isVec2Array(dest)) {
		dest[0] = tX;
		dest[1] = tY;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
	}

	return dest;
}
