
var expect = require('chai').expect;
var monospace = require('./');

describe('monospace index.js', function() {

  it('expect monospace("123456", 6).length equal 3', function() {
    expect(monospace("123456", 6)).to.equal("123456");
  });

  it('expect monospace("123456789", 6).length equal 3', function() {
    expect(monospace("123456789", 6)).to.equal('123...');
  });

  it('expect monospace("123", 6).length equal 3', function() {
    expect(monospace("123", 6)).to.equal('123   ');
  });

});
