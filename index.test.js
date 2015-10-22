
var expect = require('chai').expect;
var monospace = require('./');

describe('monospace index.js', function() {

  it('expect monospace("123456", 6) equal 123456', function() {
    expect(monospace("123456", 6)).to.equal("123456");
  });

  it('expect monospace("123456789", 6) equal 123...', function() {
    expect(monospace("123456789", 6)).to.equal('123...');
  });

  it('expect monospace("123", 6) equal 123   ', function() {
    expect(monospace("123", 6)).to.equal('123   ');
  });

});
