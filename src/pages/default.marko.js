function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>" +
      escapeXml(data.title) +
      "</title><link rel=\"stylesheet\" href=\"/dist/bundle.css\"></head><body><div id=\"container\">" +
      str(data.body) +
      "</div><script src=\"/dist/bundle.js\"></script></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
