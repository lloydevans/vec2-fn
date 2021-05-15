import { PRECISION } from "../constants/precision";

/**
 * Convert float value to given precision.
 *
 * @param value - The value to convert.
 */
export function _toPrecision(value: number, precision: number = PRECISION): number {
	if (Number.isNaN(value)) {
		throw new Error("NaN detected.");
	}

	if (!Number.isFinite(value)) {
		throw new Error("Non-finite number detected.");
	}

	if (Math.round(value) === value) {
		return value;
	}

	const pow = Math.pow(10, precision);
	return Math.round(value * pow) / pow;
}
