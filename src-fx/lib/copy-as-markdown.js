exports.formatLink = function(url, title) {
  // string chomp!
  title = title.replace(/^\s+/, '').replace(/\s+$/, '');

  // remove any new-line chars
  title = title.replace("\n", '');

  if (title === '') {
    title = "(No Title)";
  }

  return "[" + title + "](" + url + ")";
};

exports.formatList = function(texts) {
  // new line chars are appended at the end of each line
  // to make sure that we'll have a new line char at the very end.
  return texts.map(function(text) {
    return "- " + text + "\n";
  }).join("");
};
