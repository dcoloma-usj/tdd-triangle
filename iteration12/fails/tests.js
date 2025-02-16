// Use Chai's expect for assertions
const expect = chai.expect;

describe('invalid arguments', function() {
  it('if sides are not numbers it should be invalid arguments', function() {
    expect(getTriangleType('A','B','C')).to.equal('The arguments were not valid');
  });

  it('if one side is a negative number it should be invalid arguments', function() {
    expect(getTriangleType(-1, 0, 0)).to.equal('The arguments were not valid');
  });

  it('if the first side is bigger than the addition of the other two, it should be not a valid triangle', function() {
    expect(getTriangleType(5, 2, 2)).to.equal('Not a valid triangle');
  });

  it('if the second side is bigger than the addition of the other two, it should be not a valid triangle', function() {
    expect(getTriangleType(1, 8, 6)).to.equal('Not a valid triangle');
  });

  it('if the third side is bigger than the addition of the other two, it should be not a valid triangle', function() {
    expect(getTriangleType(1, 2, 6)).to.equal('Not a valid triangle');
  });

  it('if the second side is a negative number it should be invalid arguments', function() {
    expect(getTriangleType(1, -2, 0)).to.equal('The arguments were not valid');
  });

  it('if the third side is a negative number it should be invalid arguments', function() {
    expect(getTriangleType(1, 1, -2)).to.equal('The arguments were not valid');
  });
});

describe('valid arguments', function() {
  it('if sides are all equal it should be equilateral', function() {
    expect(getTriangleType('2','2','2')).to.equal('Equilateral');
  });

  it('if first and second sides are equal but different to third it should be isosceles', function() {
    expect(getTriangleType('2','2','3')).to.equal('Isosceles');
  });

  it('if first and third sides are equal but different to second it should be isosceles', function() {
    expect(getTriangleType('3','5','3')).to.equal('Isosceles');
  });

  it('if second and third sides are equal but different to first it should be isosceles', function() {
    expect(getTriangleType('4','5','5')).to.equal('Isosceles');
  });

  it('if all sides are different it should be scalene', function() {
    expect(getTriangleType('4','6','5')).to.equal('Scalene');
  });
});