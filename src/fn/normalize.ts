import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";
import { length } from "./length";

/**
 * Normalize a vector.
 *
 * @param target - Target can be vec object or array.
 * @returns - The modified target object.
 */
export function normalize<T extends Vec2Param>(target: T): T;
/**
 * Normalize a vector.
 *
 * @param target - Target can be vec object or array.
 * @param dest - destination object to store the result.
 * @returns - A reference to the destination object.
 */
export function normalize<D extends Vec2Param>(target: Vec2Param, dest?: D): D;
export function normalize<D extends Vec2Param>(target: Vec2Param, dest?: D): unknown {
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

	if (typeof dest !== "undefined") {
		if (!isVec2Object(dest) && !isVec2Array(dest)) {
			throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
		}
	}

	const _dest = dest ?? target;
	const len = length(target);
	const inv = len < Number.MIN_VALUE ? 0 : 1 / len;

	if (isVec2Object(_dest)) {
		_dest.x = tX * inv;
		_dest.y = tY * inv;
	} else if (isVec2Array(_dest)) {
		_dest[0] = tX * inv;
		_dest[1] = tY * inv;
	}

	return _dest;
}
