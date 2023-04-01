/* 
  闭包
      闭包是指函数内部定义的函数，该函数可以访问其外部函数的变量和参数，即使外部函数
  已经返回并且已经销毁了,闭包其实质就是作用域链的延伸。

      在 JavaScript 中，当函数被调用时，会创建一个新的执行上下文（execution context），
  该执行上下文会包含函数的参数、局部变量、this 等信息。当函数执行完毕后，该执行上下文会
  被销毁，其中的变量和参数也会被垃圾回收器回收。
      但是，如果在函数内部定义了另一个函数，并将该函数作为返回结果，则该函数仍然可以访问
  其外部函数的变量和参数，即使外部函数已经返回并且已经销毁了。这是因为内部函数会保留对外
  部函数执行上下文的引用，使得外部函数的变量和参数不会被垃圾回收器回收，从而形成了闭包。
  
  闭包的主要作用是：
  1.使变量不会被垃圾回收器回收，可以持续存在于内存中，可导致内存泄漏。
  2.可以在函数执行完毕后继续访问函数内部的变量。
  3.可以在函数内部创建私有变量和方法，防止外部访问和修改。
  4.可以实现函数的柯里化和装饰器模式，提高代码的灵活性和可重用性。
*/

function a(){
  let num = 0;
  return function () {
    num++;
    console.log(num)
  }
}

let b = a();
b() // 1
b() // 2
b() // 3