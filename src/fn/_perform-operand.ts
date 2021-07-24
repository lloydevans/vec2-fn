import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";
import { _modoValue } from "./_modo-value";
import { _toPrecision } from "./_to-precision";

type Operand = "*" | "-" | "/" | "+" | "%" | "-%";

/**
 * Perform operand with two vectors.
 *
 * @param target - Left hand vector.
 * @param value - Right hand vector.
 * @returns - A reference to the target object.
 */
export function _performOperand<T extends Vec2Param>(op: Operand, target: T, value: Vec2Param | number): T;
/**
 * Perform operand with two vectors.
 *
 * @param target - Left hand vector.
 * @param value - Right hand vector.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the destination object.
 */
export function _performOperand<D extends Vec2Param>(op: Operand, target: Vec2Param | number, value: Vec2Param | number, dest?: D): D;
export function _performOperand<D extends Vec2Param>(op: Operand, target: Vec2Param | number, value: Vec2Param | number, dest?: D): unknown {
	let tX: number;
	let tY: number;
	if (typeof target === "number") {
		tX = target;
		tY = target;
	} else if (isVec2Object(target)) {
		tX = target.x;
		tY = target.y;
	} else if (isVec2Array(target)) {
		tX = target[0];
		tY = target[1];
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_TARG);
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
		throw new TypeError(ERROR_MESSAGES.INV_V2_VAL);
	}

	const _dest = typeof dest === "undefined" ? target : dest;

	if (isVec2Object(_dest)) {
		switch (op) {
			case "+":
				_dest.x = _toPrecision(tX + vX);
				_dest.y = _toPrecision(tY + vY);
				break;

			case "-":
				_dest.x = _toPrecision(tX - vX);
				_dest.y = _toPrecision(tY - vY);
				break;

			case "*":
				_dest.x = _toPrecision(tX * vX);
				_dest.y = _toPrecision(tY * vY);
				break;

			case "/":
				if (vX === 0 || vY === 0) {
					throw new Error(ERROR_MESSAGES.DIVIDE_BY_ZERO);
				}
				_dest.x = _toPrecision(tX / vX);
				_dest.y = _toPrecision(tY / vY);
				break;

			case "%":
				if (vX === 0 || vY === 0) {
					throw new Error(ERROR_MESSAGES.DIVIDE_BY_ZERO);
				}
				_dest.x = _toPrecision(tX % vX);
				_dest.y = _toPrecision(tY % vY);
				break;

			case "-%":
				if (vX === 0 || vY === 0) {
					throw new Error(ERROR_MESSAGES.DIVIDE_BY_ZERO);
				}
				_dest.x = _toPrecision(_modoValue(tX, vX));
				_dest.y = _toPrecision(_modoValue(tY, vY));
				break;
		}
	} else if (isVec2Array(_dest)) {
		switch (op) {
			case "+":
				_dest[0] = _toPrecision(tX + vX);
				_dest[1] = _toPrecision(tY + vY);
				break;

			case "-":
				_dest[0] = _toPrecision(tX - vX);
				_dest[1] = _toPrecision(tY - vY);
				break;

			case "*":
				_dest[0] = _toPrecision(tX * vX);
				_dest[1] = _toPrecision(tY * vY);
				break;

			case "/":
				if (vX === 0 || vY === 0) {
					throw new Error(ERROR_MESSAGES.DIVIDE_BY_ZERO);
				}
				_dest[0] = _toPrecision(tX / vX);
				_dest[1] = _toPrecision(tY / vY);
				break;

			case "%":
				if (vX === 0 || vY === 0) {
					throw new Error(ERROR_MESSAGES.DIVIDE_BY_ZERO);
				}
				_dest[0] = _toPrecision(tX % vX);
				_dest[1] = _toPrecision(tY % vY);
				break;

			case "-%":
				if (vX === 0 || vY === 0) {
					throw new Error(ERROR_MESSAGES.DIVIDE_BY_ZERO);
				}
				_dest[0] = _toPrecision(_modoValue(tX, vX));
				_dest[1] = _toPrecision(_modoValue(tY, vY));
				break;
		}
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
	}

	return _dest;
}
