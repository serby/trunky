function stripTags(value) {
  return value.replace(/(<([^>]+)>)/ig, '');
}

function truncateWithEllipsis(value, length, ellipsis) {

  // Ellipsis string defaults to unicode ellipsis
  if (typeof ellipsis !== 'string') {
    ellipsis = '\u2026';
  }

  var response = value
    , position;


  if (response.length > length) {
    response = value.substring(0, length);
    position = response.lastIndexOf(' ');
    if (position <= 0) {
      position = length;
    }
    return response.substring(0, position) + ellipsis;
  } else {
    return response;
  }
}

function strippedTruncateWithEllipsis(value, length, ellipsis) {
  return truncateWithEllipsis(stripTags(value), length, ellipsis);
}

module.exports.stripTags = stripTags;
module.exports.truncateWithEllipsis = truncateWithEllipsis;
module.exports.strippedTruncateWithEllipsis = strippedTruncateWithEllipsis;
