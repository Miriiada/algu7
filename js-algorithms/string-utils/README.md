# JS Algorithms

A collection of JavaScript algorithm exercises and utility functions.

## What's Inside

### string-utils

Utility functions for working with and comparing strings:

- `len(str)` — returns the length of a string
- `isEqual(a, b)` — checks if two strings are equal
- `isNotEqual(a, b)` — checks if two strings are not equal
- `isMore(a, b)` — checks if `a` is lexicographically greater than `b`
- `isLess(a, b)` — checks if `a` is lexicographically less than `b`
- `isMoreOrEqual(a, b)` — checks if `a` is greater than or equal to `b`
- `isLessOrEqual(a, b)` — checks if `a` is less than or equal to `b`

The string comparison functions are implemented without using built-in string or array methods, except for `charCodeAt()`.

## Running Tests

The project uses Bun for testing.

Run all tests:

```bash
bun test