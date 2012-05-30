var trunky = require('..');

describe('trunky', function() {

  describe('#stripTags()', function() {
    it('should not alter a string with no html', function () {
      trunky.stripTags('Hello, world!').should.equal('Hello, world!');
    });

    it('should strip simple html tags', function () {
      trunky.stripTags('<b>Hello</b>, world!').should.equal('Hello, world!');
    });

    it('should tags that contain whitespace', function () {
      trunky.stripTags('Hello, <\np>world!</p>').should.equal('Hello, world!');
    });

  });

  describe('#truncateWithEllipsis()', function() {

    it('should leave an empty string unchanged', function() {
      trunky.truncateWithEllipsis('', 0).should.equal('');
    });

    it('should not truncate a string shorter than the desired length', function() {
      trunky.truncateWithEllipsis('This is a test', 20).should.equal('This is a test');
    });

    it('should truncate a simple string', function() {
      trunky.truncateWithEllipsis('This is a test', 10).should.equal('This is a\u2026');
    });

    it('should truncate HTML without stripping ', function() {
      trunky.truncateWithEllipsis('<p>This</p> <strong>is a</strong> <b>test</b>', 10).should.equal('<p>This</p\u2026');
    });

    it('should truncate a simple string with a custom ellipsis string', function() {
      trunky.truncateWithEllipsis('This is a test', 10, '...').should.equal('This is a...');
    });

    it('should truncate at the desired length if no word breaks are found', function () {
      trunky.truncateWithEllipsis('abcdefghijklmnopqrstuvwxyz', 10).should.have.lengthOf(11);
    });

    it('should truncate at the desired length if a word break occurs outside of the desired length', function () {
      trunky.truncateWithEllipsis('abcdefghijkl mnopqrstuvwxyz', 10).should.have.lengthOf(11);
    });

    it('should truncate at the last word break that occurs inside the desired length', function () {
      trunky.truncateWithEllipsis('ab cdefghijklmnopqrstuvwxyz', 10).should.have.lengthOf(3);
      trunky.truncateWithEllipsis('ab cdef ghijklmnopqrstuvwxyz', 10).should.have.lengthOf(8);
    });

  });

  describe('#strippedTruncateWithEllipsis()', function() {

    it('should leave an empty string unchanged', function() {
      trunky.strippedTruncateWithEllipsis('', 0).should.equal('');
    });

    it('should not truncate a string shorter than the desired length', function() {
      trunky.strippedTruncateWithEllipsis('This is a test', 20).should.equal('This is a test');
    });

    it('should truncate a simple string', function() {
      trunky.strippedTruncateWithEllipsis('This is a test', 10).should.equal('This is a\u2026');
    });

    it('should truncate HTML simple string', function() {
      trunky.strippedTruncateWithEllipsis('<p>This</p> <strong>is a</strong> <b>test</b>', 10).should.equal('This is a\u2026');
    });

    it('should truncate a simple string with a custom ellipsis string', function() {
      trunky.strippedTruncateWithEllipsis('This is a test', 10, '...').should.equal('This is a...');
    });

    it('should truncate HTML simple string with a custom ellipsis string', function() {
      trunky.strippedTruncateWithEllipsis('<p>This</p> <strong>is a</strong> <b>test</b>', 10, '...').should.equal('This is a...');
    });

    it('should return plain text when HTML is given but too short for truncation', function() {
      trunky.strippedTruncateWithEllipsis('<p>This</p> <strong>is a</strong> test', 20).should.equal('This is a test');
    });

  });
});