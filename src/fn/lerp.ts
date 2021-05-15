import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";
import { _lerpValue } from "./_lerp-value";

/**
 * Linear interpolate two vectors.
 *
 * @param target - Vector A.
 * @param value - Vector B.
 * @param k - The amount to interpolate by.
 * @returns - A reference to the modified target object.
 */
export function lerp<T extends Vec2Param, V extends Vec2Param>(target: T, value: V, k: number): T;
/**
 * Linear interpolate two vectors.
 *
 * @param target - Vector A.
 * @param value - Vector B.
 * @param k - The amount to interpolate by.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 */
export function lerp<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V, k: number, dest: D): D;
export function lerp<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V, k: number, dest?: D): unknown {
	if (typeof k !== "number") {
		throw new TypeError(ERROR_MESSAGES.INV_NUM);
	}

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
		throw new TypeError(ERROR_MESSAGES.INV_V2_VAL);
	}

	if (typeof dest !== "undefined") {
		if (!isVec2LikeArray(dest) && !isVec2LikeObject(dest)) {
			throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
		}
	}

	const _dest = dest ?? target;

	if (isVec2LikeObject(_dest)) {
		_dest.x = _lerpValue(tX, vX, k);
		_dest.y = _lerpValue(tY, vY, k);
	} else if (isVec2LikeArray(_dest)) {
		_dest[0] = _lerpValue(tX, vX, k);
		_dest[1] = _lerpValue(tY, vY, k);
	}

	return _dest;
}
