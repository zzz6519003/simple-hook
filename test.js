var hook = require('./index')


function a() {
  console.log("this is a");
  return true;
}

function b(arg) {
  console.log("this is b" + arg);  
  return true;
}

function c() {
  console.log("this is c");

}

hook.register("myhook", a);
hook.register("myhook", b);
hook.register("myhook", c);

hook.call("myhook", " haha");
