import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";
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
export function normalize<T extends Vec2Param, D extends Vec2Param>(target: T, dest?: D): D;
export function normalize<T extends Vec2Param, D extends Vec2Param>(target: T, dest?: D): unknown {
	let tX: number;
	let tY: number;
	if (isVec2LikeArray(target)) {
		tX = target[0];
		tY = target[1];
	} else if (isVec2LikeObject(target)) {
		tX = target.x;
		tY = target.y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_TARG);
	}

	if (typeof dest !== "undefined") {
		if (!isVec2LikeArray(dest) && !isVec2LikeObject(dest)) {
			throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
		}
	}

	const _dest = dest ?? target;
	const len = length(target);
	const inv = len < Number.MIN_VALUE ? 0 : 1 / len;

	if (isVec2LikeObject(_dest)) {
		_dest.x = tX * inv;
		_dest.y = tY * inv;
	} else if (isVec2LikeArray(_dest)) {
		_dest[0] = tX * inv;
		_dest[1] = tY * inv;
	}

	return _dest;
}
