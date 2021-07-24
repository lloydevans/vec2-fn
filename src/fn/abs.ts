import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Calculate vec2 absolute value.
 *
 * @param target - Target vector.
 * @returns - A reference to the modified target vector.
 *
 *
 * @example
 *
 * ```ts
 * abs({ x: -1, y: -1 }); // -> { x: 0, y: 0 }
 * ```
 */
export function abs<T extends Vec2Param>(target: T): T;
/**
 * Calculate vec2 absolute value.
 *
 * @param target - Target vector.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 *
 *
 * @example
 *
 * ```ts
 * abs({ x: -1, y: -1 }); // -> { x: 0, y: 0 }
 * ```
 */
export function abs<D extends Vec2Param>(target: Vec2Param, dest?: D): D;
export function abs<D extends Vec2Param>(target: Vec2Param, dest?: D): unknown {
	let tX: number;
	let tY: number;
	if (isVec2LikeObject(target)) {
		tX = target.x;
		tY = target.y;
	} else if (isVec2LikeArray(target)) {
		tX = target[0];
		tY = target[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_TARG);
	}

	if (typeof dest !== "undefined") {
		if (!isVec2LikeArray(dest) && !isVec2LikeObject(dest)) {
			throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
		}
	}

	const _dest = dest ?? target;

	if (isVec2LikeArray(_dest)) {
		_dest[0] = Math.abs(tX);
		_dest[1] = Math.abs(tY);
	}

	if (isVec2LikeObject(_dest)) {
		_dest.x = Math.abs(tX);
		_dest.y = Math.abs(tY);
	}

	return _dest;
}
