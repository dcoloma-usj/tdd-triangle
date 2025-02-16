// Use Chai's expect for assertions
const expect = chai.expect;

describe('invalid arguments', function() {
  it('if sides are not numbers it should be invalid arguments', function() {
    expect(getTriangleType('A','B','C')).to.equal('The arguments were not valid');
  });
});