import { Vec2Param } from "../types/vec2-param";
import { _performOperand } from "./_perform-operand";

/**
 * Apply modo (negative values wrapped) value to target vector.
 *
 * @param target - Target vector.
 * @param value - The value to modo by.
 * @returns - A reference to the modified target object.
 */
export function modo<T extends Vec2Param>(target: T, value: Vec2Param | number): T;
/**
 * Apply modo (negative values wrapped) value to target vector.
 *
 * @param target - Target vector.
 * @param value - The value to modo by.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 */
export function modo<D extends Vec2Param>(target: Vec2Param, value: Vec2Param | number, dest: D): D;
export function modo<D extends Vec2Param>(target: Vec2Param, value: Vec2Param | number, dest?: D): unknown {
	return _performOperand("-%", target, value, dest);
}
