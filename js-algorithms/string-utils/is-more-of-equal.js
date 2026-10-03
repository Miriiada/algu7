import { isMore } from './is-more.js';
import { isEqual } from './is-equal.js';

export function isMoreOfEqual(a, b) {
    return isMore(a, b) || isEqual(a, b);
}