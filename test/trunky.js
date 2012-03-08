var trunky = require('..');
describe('trunky', function() {
  describe('#truncateWithEllipsis()', function() {
    it('should leave a empty string unchanged', function() {
      trunky.truncateWithEllipsis('', 0).should.equal('');
    });
    it('should not truncate a string shorter than the desired length', function() {
      trunky.truncateWithEllipsis('This is a test', 20).should.equal('This is a test');
    });
    it('should truncate a simple string', function() {
      trunky.truncateWithEllipsis('This is a test', 10).should.equal('This is a...');
    });
    it('should truncate HTML simple string', function() {
      trunky.truncateWithEllipsis('<p>This</p> <strong>is a</strong> <b>test</b>', 10).should.equal('This is a...');
    });
  });
});