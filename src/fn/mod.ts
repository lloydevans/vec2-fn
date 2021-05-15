import { Vec2Param } from "../types/vec2-param";
import { _performOperand } from "./_perform-operand";

/**
 * Apply modulus value to target vector.
 *
 * @param target - Target vector.
 * @param value - The value to modulo by.
 * @returns - A reference to the modified target object.
 */
export function mod<T extends Vec2Param>(target: T, value: Vec2Param | number): T;
/**
 * Apply modulus value to target vector.
 *
 * @param target - Target vector.
 * @param value - The value to modulo by.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 */
export function mod<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V | number, dest?: D): D;
export function mod<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V | number, dest?: D): unknown {
	return _performOperand("%", target, value, dest);
}
