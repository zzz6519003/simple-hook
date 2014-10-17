function a() {
  console.log("this is a");
}

function b() {
  console.log("this is b");
}

// function pre(a, b) {
//   b();
//   a();
// }

// a = pre(a, b);
// a;

var hook = require('./index');

hook.pre(a, b);