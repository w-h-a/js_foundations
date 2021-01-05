The remainder operator is not the modulo operator. Here’s the difference.

Suppose we have integers _a_ and _b_.

First, let's look at

> _a_ remainder _b_ = _r_.

To calculate this:
- _a_ / _b_ = _p_
- Remove the decimal and everything after the decimal in _p_ (in JavaScript, this would be done by `Math.trunc(p)`). Call this integer ‘_q_’ so that _q_ = `Math.trunc(p)`.
- Solve for _r_: _a_ = _bq_ + _r_

Now, let's look at

> _a_ modulo _b_ = _r_.

To calculate this:
- _a_ / _b_ = _p_
- Return the largest integer less than or equal to a _p_ (in JavaScript, this would be done by `Math.floor(p)`). Call this integer ‘_q_’ so that _q_ = `Math.floor(p)`.
- Solve for _r_: _a_ = _bq_ + _r_

If both _a_ and _b_ are positive or if both _a_ and _b_ are negative, then _a_ remainder _b_ and _a_ modulo _b_ return the same value for _r_. However, if _a_ and _b_ have opposite signs, the results differ. With the above understanding, the examples in the table should be easier to understand. Simply plug and chug.
