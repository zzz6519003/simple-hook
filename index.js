module.exports = {

  hooks: [],

  register : function(name, callback) {
    if (typeof(this.hooks[name]) === 'undefined') {
      this.hooks[name] = [];
    }
    this.hooks[name].push(callback);
  },

  call : function(name, arguments) {
    if (typeof(this.hooks[name]) !== 'undefined'){
      for (i = 0; i < this.hooks[name].length; i++) {
        if (this.hooks[name][i](arguments) !== true) {
          break;
        }
      }
    }
  }

}