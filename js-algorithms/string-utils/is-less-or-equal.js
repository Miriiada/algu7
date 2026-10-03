import { isLess } from './is-less.js';
import { isEqual } from './is-equal.js';

export function isLessOrEqual(a, b) {
    return isLess(a, b) || isEqual(a, b);
}