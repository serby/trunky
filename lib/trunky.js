function stripTags(value) {
  return value.replace(/(<([^>]+)>)/ig, '');
}

module.exports.stripTags = stripTags;

module.exports.truncateWithEllipsis = function(value, length) {
  var response = stripTags(value).trim()
    , position;

  if (value.length > length) {
    response = response.substring(0, length);
    position = response.lastIndexOf(' ');
    if (position <= 0) {
      position = length;
    }
    return response.substring(0, position) + '...';
  } else {
    return value;
  }
};
