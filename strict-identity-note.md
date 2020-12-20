# On Strict Identity (or Equality) in JavaScript #

Some weeks ago, I had a fun conversation with Victor Paolo Reyes (a Launch School TA) about everything from passing values, passing references, and scope in JavaScript. It was illuminating. One thing (among many) that Victor illuminated for me was that I didn't quite understand the strict identity operator in JavaScript. Thanks to Victor and thinking about the issue some more, I think I understand it better now. I hope that the following clarifies some things for beginning students that might be confused about strict identity in JavaScript.

Consider the following list of words:

'bull'

'bull'

'cow'

How many words are on the list? You'll probably point out that such a question is ambiguous. The right answer could be "two" or "three". One explanation of this ambiguity is that the answer depends on what sort of thing we are counting (see also J. Perry's (1970) "The Same F"). Are we counting _kinds_ of words or _individual_ words?

Suppose we understand the first and second items on the list as two non-identical word-individuals that, nevertheless, both share the property of having the characters 'b', 'u', 'l', and 'l' in that order. Further, the last item (but not the other two) has the property of having the characters 'c', 'o', and 'w' in that order. Given all that, it seems correct to say there are _three word-individuals_, but only _two word-kinds_ on the list. (Of course, we can note that all of the word-individuals in the list share the property of being nouns and, hence, there is one word-kind. This shows that we need to be clear on what kind of kind we're talking about, but let's think about words as JavaScript does for now: strings of characters in a particular order.)

Notice that our choice in how to handle the above question (in part) hinges on whether we want to say the first two items on the list are identical or not. The point is that we need to stipulate whether those are to be counted as identical so that we don't have any ambiguity in our language.

What's JavaScript's choice? Depending on the data type, JavaScript does a bit of both.

Consider first the following example using only strings:

`let a = 'bull';`

`let b = a;`

`let c = 'cow';`

How many strings are there? Is the answer "three" or "two"? It is intuitively the case that `!(a === c || b == c)`. So there has to be at least two strings. But what about `a` and `b`? Assigning the value held inside `a` to the variable `b` duplicates `'bull'` such that `a` "points to" one `'bull'`-individual whereas `b` "points to" a distinct `'bull'`-individual. Still, JavaScript returns `true` when given `a === b`. So, relative to JavaScript's strict identity operator, there are only two strings.

Generalizing, this tells us that JavaScript's strict identity does not "see" tokens of simple (primitive) types as individuals. If it did, `a !== b` would return `true` since the value stored in `b` is not the same `'bull'`-individual as the `'bull'`-individual stored in `a`. So, JavaScript's strict identity only "sees" tokens of simple data types as kinds. It only sees string-kinds, number-kinds, and boolean-kinds rather than boolean-individuals, string-individuals, or number-individuals.

Now consider the following example using only array types:

`let a = ['bull', 'cow'];`

`let b = a;`

`let c = ['bull', 'cow'];`

How many arrays are on the list? Is the answer "three", "two", or "one"? Suppose JavaScript's strict identity operator only "sees" array-kinds in the same way as it did with the string example. In that case, the answer should be "one". After all, there is intuitively one kind of array in the above list of arrays. (Incidentally, JavaScript agrees with this if you run a pairwise comparison of the elements (or properties) of any of the listed array pairs.) However, it is perhaps counter-intuitive that we get precisely the same return values as we did before. That is, the following two comparisons return `true`:

`!(a === c || b === c);`

`a === b;`

Given these results, as far as JavaScript's strict identity operator is concerned, there cannot be merely one array in the list. Indeed, there must be exactly two arrays, which suggests that JavaScript's strict identity operator is acting in a more fine-grained way than before. But, if so, why isn't it the case that `a !== b`? Here's the explanation: The assignment of the reference of `a` to `b` does not copy the designated array. Instead, the reference to the array is copied. Because `a` and `b` both contain the same reference-kind, both `a` and `b` designate (albeit, indirectly) the same array-individual. So, the reason `a === b` returns `true` is because we do not create any new individual upon the assignment of `a` to `b`. Hence, there cannot be three arrays here. Finally, the declaration/assignment of variable `c` creates a distinct array-individual and stores a different reference-kind in `c`. So, we have two arrays.

The above return results tell us that JavaScript's strict identity does not "see" tokens of complex (object) types as kinds. If it did, `(a === c || b === c)` (i.e., because `(a === c && b === c)`) since `a` (and `b`) has a reference that points to the same array-kind as the array-kind pointed to by the reference stored in `c`. So, JavaScript's strict identity must "see" tokens of complex data types as individuals. It sees array-individuals and object-individuals rather than array-kinds or object-kinds.

Given the above model, the way I now understand strict identity in JavaScript is roughly as follows:

>If both operands are complex types, return true just in case the operands have the same type and refer to the same individual. If both operands are simple types, return true just in case the operands have the same type and refer to the same kind.

Here we have reduced "strict identity" to three other "identity" relations: "same type", "same individual", and "same kind". The "same type" relation is, of course, a primitive (built-in) relation. Clearly, "same individual" has something to do with the location of the data in storage.  The "same kind" relation is a bit complicated, but [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) has the following excellent heuristic:
-Numbers must have the same numeric values. (+0 and -1 are identical, and if either operand is NaN, the strict identity operator returns false.)
-Strings must have the same characters in the same order.
-Booleans must be both `true` or both `false`.
Note also that "same kind" generalizes over memory locations. Again, when we apply JavaScript's strict identity operator to simple data types, JavaScript does not see individuals but rather kinds.

How does this model of strict identity square with the definitions of strict identity given in Launch's Introduction to JavaScript? If we ignore the `NaN` number-kind for the moment, we get the following definition in the control flow chapter:

>"The strict equality operator, also known as the identity operator, returns `true` when the operands have the same type _and_ value, `false` otherwise."

Here 'same value' is ambiguous, but distinguishing between object-individuals and primitive-kinds helps clarify this definition. We can reduce 'same value' to 'same individual' and 'same kind', depending on the data type under discussion.

Furthermore, in the chapter on arrays, we have the following passage:

>"At first glance, you might say that [the 'a' (or 'b') and 'c' arrays are] 'the same array,' but they're not. They're two different arrays that happen to have the same values. However, they occupy distinct positions in memory, so they aren't the same array, and thus aren't equal."

Again, making the distinction between object-individuals and primitive-kinds is useful here. The arrays are distinct because JavaScript is concerned with array-individuals. That's why being in distinct positions in memory matters here but does not matter to identity in the case of primitive types, where JavaScript's strict identity is only concerned with kinds.

The distinction between individuals and kinds is also potentially useful for thinking about shallow and deep copies, but I'll stop here for now. I hope this was somewhat helpful. It was at least helpful for me to try to share my mental model with you.
