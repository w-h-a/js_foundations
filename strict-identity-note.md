Some weeks ago, I had a fun conversation with Victor Paolo Reyes (a Launch School TA) about everything from passing values, passing references, and scope in JavaScript. It was illuminating. One thing (among many) that Victor illuminated for me was that I didn't quite understand the strict identity operator in JavaScript. Thanks to Victor and thinking about the issue some more, I think I understand it better now. I hope that the following clarifies some things for beginning students that might be confused about strict identity in JavaScript.

Consider the following list of words:

'bull'

'bull'

'cow'

How many words are on the list? You'll probably point out that such a question is ambiguous. The right answer could be "two" or "three". One explanation of this ambiguity is that the answer depends on what sort of thing we are counting (see also J. Perry's (1970) "The Same F"). Are we counting _kinds_ of words or _individual_ words?

Suppose we understand the first and second items on the list as two non-identical word-individuals that, nevertheless, both share the property of being 'bull'. Further, the last item (but not the other two) has the property of being 'cow'.  Given all that, it seems correct to say there are three word-individuals, but only two word-kinds on the list. (Of course, we can note that all word-individuals share the property of being nouns and, hence, there is only one word-kind. This shows that we need to be clear on what kind of kind we're talking about, but let's leave that aside.)

Alternatively, suppose we stipulate that there are no word-individuals but only word-kinds. I won't talk here about how we might understand word-kinds, but suffice it to stipulate that the first two items on the list are the same word-kind, whereas the third is a distinct word-kind. In that case, there are just two word-kinds on the list.

Notice that our choice in how to handle the above question (in part) hinges on whether we want to say the first two items on the list are identical or not. The point is, we need to stipulate whether those are to be counted as identical so that we don't have any ambiguity in our language.

What's JavaScript's choice? Depending on the data type, JavaScript does a bit of both.

Consider first the following example using only strings:

`let a = 'bull';`

`let b = a;`

`let c = 'cow';`

It is intuitively the case that `!(a === c || b == c)`. But what about `a` and `b`? Assigning the value held inside `a` to the variable `b` duplicates `'bull'` such that `a` "points to" one `'bull'`-individual whereas `b` "points to" a distinct `'bull'`-individual. Still, JavaScript returns `true` when given `a === b`.

Generalizing, this tells us that JavaScript's strict identity does not "see" tokens of simple (primitive) types as individuals. If it did, `a !== b` would return `true` since the value stored in `b` is not the same `'bull'`-individual as the `'bull'`-individual stored in `a`. So, instead, JavaScript's strict identity only "sees" tokens of simple data types as kinds. It only sees string-kinds, number-kinds, and boolean-kinds rather than boolean-individuals, string-individuals, or number-individuals.

Now consider the following example using only array types:

`let a = ['bull', 'cow'];`

`let b = a;`

`let c = ['bull', 'cow'];`

How many arrays are on the list? Suppose JavaScript's strict identity operator only "sees" array-kinds in the same way as it did with the string example. In that case, the answer should be "one". After all, there is intuitively one kind of array in the above list of arrays. (Incidentally, JavaScript agrees with this if you run a pairwise comparison of the elements (or properties) of any of the listed array pairs.) However, it is perhaps counter-intuitive that we get precisely the same return values as we did before. That is, the following two comparisons return `true`:

`!(a === c || b === c);`

`a === b;`

What's going on here? The assignment of the reference of `a` to `b` does not copy the designated array. Instead, the reference to the array is copied. Because `a` and `b` both contain the same reference-kind, both `a` and `b` designate (albeit, indirectly) the same array-individual. By contrast, the declaration/assignment of variable `c` creates a distinct array-individual and stores a different reference-kind in `c`.

So, the above return results tell us that JavaScript's strict identity does not "see" tokens of complex (object) types as kinds. If it did, `(a === c || b === c)` (i.e., because `(a === c && b === c)`) since the references stored in `a` (and `b`) point to the same array-kind as the array-kind pointed to by the reference stored in `c`. So, instead, JavaScript's strict identity "sees" tokens of complex data types as individuals. It sees array-individuals and object-individuals rather than array-kinds or object-kinds.

Given the above model, the way I now understand strict identity in JavaScript is as follows:

>If both operands are complex types, return true just in case the operands have the same type and refer to the same individual. If both operands are simple types, return true just in case the operands have the same type and refer to the same kind.

Here we have reduced "strict identity" to three other "identity" relations: "same type", "same individual", and "same kind". The "same type" relation is, of course, a primitive (built-in) relation. Clearly, "same individual" has something to do with the location of the data in storage.  The "same kind" relation is a bit complicated, but MDN has the following excellent heuristic:
-Numbers must have the same numeric values. +0 and -0 are considered to be the same value. If either operand is NaN, return false.
-Strings must have the same characters in the same order.
-Booleans must be both true or both false.
Note also that "same kind" generalizes over memory locations. Again, when we apply JavaScript's strict identity operator to simple data types, JavaScript does not see individuals but rather kinds.

How does this model of strict identity square with the definitions of strict identity given in Launch's Introduction to JavaScript? If we ignore the NaN number-kind for the moment, we get the following definition in the control flow chapter:

>"The strict equality operator, also known as the identity operator, returns true when the operands have the same type and value, false otherwise."

Here 'same value' is ambiguous, but distinguishing between object-individuals and primitive-kinds is useful in clarifying this definition. We can reduce 'same value' to 'same individual' and 'same kind', depending on the data type under discussion.

Furthermore, in the chapter on arrays, we have the following passage:

>"At first glance, you might say that [the 'a' (or 'b') and 'c' arrays are] 'the same array,' but they're not. They're two different arrays that happen to have the same values. However, they occupy distinct positions in memory, so they aren't the same array, and thus aren't equal."

Again, making the distinction between object-individuals and primitive-kinds is useful here. The arrays are distinct because JavaScript is concerned with array-individuals. That's why being in distinct positions in memory matters here but does not matter to identity in the case of primitive types, where JavaScript's strict identity is only concerned with kinds.

The distinction between individuals and kinds is also potentially useful for thinking about shallow and deep copies, but I'll stop here for now. I hope this was somewhat helpful. It was at least helpful for me to try to share my mental model with you.
