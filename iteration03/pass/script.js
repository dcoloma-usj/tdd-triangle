var INVALID_ARGS = 'The arguments were not valid';
var NOT_A_TRIANGLE = "Not a valid triangle"

function getTriangleType(lengthA, lengthB, lengthC) {
  var type = INVALID_ARGS;

  var a = parseFloat(lengthA);
  var b = parseFloat(lengthB);
  var c = parseFloat(lengthC);
  if (b+c <= a) { // invalid triangle
      type = NOT_A_TRIANGLE;
  }
  return type;
}