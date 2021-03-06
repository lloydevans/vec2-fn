import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";
import { _toPrecision } from "./_to-precision";

/**
 * Rotate a vector around zero point.
 *
 * @param target - The target vector.
 * @param angle - The amount of rotation to apply in radians.
 * @readonly - A reference to the modified target vector.
 */
export function rotate<T extends Vec2Param>(target: T, angle: number): T;
/**
 * Rotate a vector around zero point.
 *
 * @param target - The target vector.
 * @param angle - The amount of rotation to apply in radians.
 * @param dest - Optional destination object to store the result.
 * @readonly - A reference to the modified destination vector.
 */
export function rotate<D extends Vec2Param>(target: Vec2Param, angle: number, dest?: D): D;
export function rotate<D extends Vec2Param>(target: Vec2Param, angle: number, dest?: D): unknown {
	if (typeof angle !== "number") {
		throw new TypeError(ERROR_MESSAGES.INV_NUM);
	}

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
	const c = Math.cos(angle);
	const s = Math.sin(angle);

	if (isVec2Object(_dest)) {
		if (angle !== 0) {
			_dest.x = _toPrecision(c * tX - s * tY);
			_dest.y = _toPrecision(s * tX + c * tY);
		} else {
			_dest.x = _toPrecision(tX);
			_dest.y = _toPrecision(tY);
		}
	} else if (isVec2Array(_dest)) {
		if (angle !== 0) {
			_dest[0] = _toPrecision(c * tX - s * tY);
			_dest[1] = _toPrecision(s * tX + c * tY);
		} else {
			_dest[0] = _toPrecision(tX);
			_dest[1] = _toPrecision(tY);
		}
	}

	return _dest;
}
