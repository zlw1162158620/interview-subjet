/* 
  原型：就是函数的prototype属性，prototype的constructor属性指向构造函数
  原型链：就是多个原型链接形成的一条链子，而原型与原型之间的连接点就是__proto__，可以称它为隐式原型，__proto__指向构造函数的prototype，
         所以c.__proto__ === Child.prototype。
         实例对象在查找属性时，首先会从自身的构造函数去找=>构造函数的prototype去找=>父构造函数去找=>父构造函数的prototype去找=>
         ...=>Object.prototype,若Object.prototype也没有该属性就会输出undefined。
         原型链的终点是null。
*/
Object.prototype.name = 'Object-name'
function Father(){
  this.name = 'father-name'
}
Father.prototype.name = 'father-prototype-name';
function Child(){
  this.name = '张三'
}
Child.prototype.name = 'child-name';

// Child.prototype = Object.create(Father.prototype)
Child.prototype = new Father()
Child.prototype.constructor = Father;
const c = new Child();
console.log(c.name);