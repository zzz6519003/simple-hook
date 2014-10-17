module.exports = {
  pre: function(origin, injectFunc) {
    injectFunc();
    origin()
  }
}