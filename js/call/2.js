//bar 函数运行 内部this  foo
//bar.call 函数即对象
//bar.call(foo)
//任何函数都具有prototype函数
'use strick';
Function.prototype.call2 = 
function(context){
    //funC()???  this 函数
    //this();
    context.fn = this;
    context.fn();
    //console.log('手动模拟call功能')
    //console.log(context);
    //1 把原来的函数执行一下
    //2 交且他内部的指针指向context
}
function  func(){
    console.log(this.value);

}
var foo ={
    value:1
}
func.call2(foo);
