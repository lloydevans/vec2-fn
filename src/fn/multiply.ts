import { Vec2Param } from "../types/vec2-param";
import { _performOperand } from "./_perform-operand";

/**
 * Multiply two vectors.
 *
 * @param target - The target vector.
 * @param value - The vector to multiply by.
 * @returns - A reference to the modified target object.
 */
export function multiply<T extends Vec2Param>(target: T, value: Vec2Param | number): T;
/**
 * Multiply two vectors.
 *
 * @param target - The target vector.
 * @param value - The vector to multiply by.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 */
export function multiply<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V | number, dest?: D): D;
export function multiply<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V | number, dest?: D): unknown {
	return _performOperand("*", target, value, dest);
}
