The remainder operator is not the modulo operator. Here’s the difference.

Suppose we have integers `a` and `b`.

First, let's look at `a` remainder `b` = `r`. To calculate this:
- `a` / `b` = `p`
- Remove the decimal and everything after the decimal in `p` (in JavaScript, this would be done by `Math.trunc(p)`). Call this integer ‘`q`’ so that `q` = `Math.trunc(p)`.
- Solve for `r`: `a` = `bq` + `r`

Now, let's look at `a` modulo `b` = `r`. To calculate this:
- `a` / `b` = `p`
- Return the largest integer less than or equal to a `p` (in JavaScript, this would be done by `Math.floor(p)`). Call this integer ‘`q`’ so that `q` = `Math.floor(p)`.
- Solve for `r`: `a` = `bq` + `r`

If both `a` and `b` are positive or if both `a` and `b` are negative, then `a` remainder `b` and `a` modulo `b` return the same value for `r`. However, if `a` and `b` have opposite signs, the results differ. With the above understanding, the examples in the table should be easier to understand. Simply plug and chug.
