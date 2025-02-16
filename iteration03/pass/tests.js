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
});