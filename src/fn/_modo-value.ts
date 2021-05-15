/**
 * Perform modulus with negative values wrapped.
 *
 * @param value - Target value.
 * @param length - Modo by this value.
 */
export function _modoValue(value: number, length: number): number {
	if (Number.isNaN(value) || Number.isNaN(length)) {
		throw new Error("NaN detected");
	}

	if (!Number.isFinite(value) || !Number.isFinite(length)) {
		throw new Error("Non-finite number detected");
	}

	return ((value % length) + length) % length;
}
