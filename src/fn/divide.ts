import { Vec2Param } from "../types/vec2-param";
import { _performOperand } from "./_perform-operand";

/**
 * Divide two vectors.
 *
 * @param target - Target vector.
 * @param value - The vector to divide by.
 * @returns - A reference to the modified target object.
 */
export function divide<T extends Vec2Param>(target: T, value: Vec2Param | number): T;
/**
 * Divide two vectors.
 *
 * @param target - Target vector.
 * @param value - The vector to divide by.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 */
export function divide<D extends Vec2Param>(target: Vec2Param, value: Vec2Param | number, dest: D): D;
export function divide<D extends Vec2Param>(target: Vec2Param, value: Vec2Param | number, dest?: D): unknown {
	return _performOperand("/", target, value, dest);
}
