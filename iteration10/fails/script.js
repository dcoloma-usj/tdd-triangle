var INVALID_ARGS = 'The arguments were not valid';
var NOT_A_TRIANGLE = "Not a valid triangle";
var EQUILATERAL = "Equilateral";
var ISOSCELES = "Isosceles";

function getTriangleType(lengthA, lengthB, lengthC) {
  var type = INVALID_ARGS;

  var a = parseFloat(lengthA);
  var b = parseFloat(lengthB);
  var c = parseFloat(lengthC);

  if ((a <= 0) || (b<=0) || (c<=0)) {
      type = INVALID_ARGS;
  } else if ((b+c <= a) || (a+c <= b) || (a+b <= c)) { // invalid triangle
      type = NOT_A_TRIANGLE;
  } else if ((a===b) && (b===c)) {
    type = EQUILATERAL;
  } else if (a===b) {
    type = ISOSCELES;
  }
  return type;
}