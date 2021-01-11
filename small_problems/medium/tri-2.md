Problem:

Consider the following definitions

A triangle is right just in case one angle is a right angle 
A triangle is acute just in case all angles are less than 90
A triangle is obtuse just in case one angle is greater than 90

All triangles are such that the sum of the angles (each of which is greater than 0) must be 180.

Write a function that takes three angles of a triangle as arguments and returns one of the following

'right'
'acute'
'obtuse'
'not a triangle'

depending on the input. You may assume that all angles have integer values. You may also assume that the arguments are numbers representing degrees.

- input: triple of numbers
- output: string

- explicit
  - defs
  - the input integers represent angles in degrees

- implicit
  - ?

Test Cases (Given):

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
