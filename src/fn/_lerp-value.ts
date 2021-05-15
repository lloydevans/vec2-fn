import { ERROR_MESSAGES } from "../constants/error-messages";

/**
 * Linear interpolate.
 *
 * @param a - Value a.
 * @param b - Value b.
 * @param k - Amount
 */
export function _lerpValue(a: number, b: number, k: number): number {
	if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(k)) {
		throw new Error(ERROR_MESSAGES.NAN);
	}

	if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(k)) {
		throw new Error(ERROR_MESSAGES.NON_FINITE);
	}

	return a * (1 - k) + b * k;
}
