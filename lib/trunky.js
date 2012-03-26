var stripTags = function (value) {
  return value.replace(/(<([^>]+)>)/ig, '');
};

var truncateWithEllipsis = function(value, length, unicode) {

  // Unicode option defaults to true
  if (typeof unicode === 'undefined') {
    unicode = true;
  }

  var response = stripTags(value).trim()
    , position;


  if (value.length > length) {
    response = response.substring(0, length);
    position = response.lastIndexOf(' ');
    if (position <= 0) {
      position = length;
    }
    return response.substring(0, position) + (unicode ? '\u2026' : '...');
  } else {
    return value;
  }
};

module.exports.stripTags = stripTags;
module.exports.truncateWithEllipsis = truncateWithEllipsis;