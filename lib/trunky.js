function stripTags(value) {
  return value.replace(/(<([^>]+)>)/ig, '');
}

function truncateWithEllipsis(value, length, ellipsis) {

  // Ellipsis string defaults to unicode ellipsis
  if (typeof ellipsis !== 'string') {
    ellipsis = '\u2026';
  }

  var response = stripTags(value).trim()
    , position;


  if (value.length > length) {
    response = response.substring(0, length);
    position = response.lastIndexOf(' ');
    if (position <= 0) {
      position = length;
    }
    return response.substring(0, position) + ellipsis;
  } else {
    return value;
  }
}

module.exports.stripTags = stripTags;
module.exports.truncateWithEllipsis = truncateWithEllipsis;