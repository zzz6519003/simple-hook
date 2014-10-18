# stupid chaining hook

### usage

simply register a name, and a sequence of your function.

```js
hook.register("myhook", a);
hook.register("myhook", b);
hook.register("myhook", c);
```

if any of [a, b, c] returns true, the chaining will continue.
you can also pass variable

```js

function b(arg) {
  console.log("this is b" + arg);  
  return true;
}

hook.register("myhook", a);
hook.register("myhook", b);
hook.register("myhook", c);

hook.call("myhook", " haha");
```

##说明
之前花了不少时间，看了这些的代码。

https://github.com/cowboy/javascript-hooker

https://github.com/bnoguchi/hooks-js

感觉只是大概了解了皮毛。。。
如果让我对一个function 实现pre和post
我能想到的是
```js
var function_itself = function() {
    alert('in function itself');
}
function_itself.PRE_PROCESS = function() {
    alert('in pre_process');
}
function_itself.POST_PROCESS = function() {
    alert('in post_process');
}

var function_processor = function(func) {
    if (func.PRE_PROCESS) {
        func.PRE_PROCESS.call();
    }
    func.call();
    if (func.POST_PROCESS) {
        func.POST_PROCESS.call();
    }        
}

```
但这么也太傻了。。

因为是让我做个hook，我觉得这样也应该可以叫做hook
总感觉自己陷入了某种思维定势。。。我智商捉急