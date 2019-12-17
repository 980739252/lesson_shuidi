-  this  是有原则的，
  1. 普通函数被调用  this  指向window/global
  'use  strict' 严格模式下  为underfined
  2. 方法作为对象的方法被调用时，this指向对象
  3. 被new运行时 ，this  指向实例化的对象 
- call  手动指定函数运行时的this，并将函数运行  
bar.call(foo) 函数运行
- bar.call
  js中  函数是对象   
  手写一个call？