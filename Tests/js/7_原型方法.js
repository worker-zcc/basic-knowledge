function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}

// Foo当作类，在原型上设置实例公有的属性方法 调用方式: 实例.a()
Foo.prototype.a = function () {
  console.log(3)
}

// 把Foo当作普通对象设置私有属性方法  调用方式：Foo.a()
Foo.a = function() {
  console.log(4)
}
Foo.a(); // =>4
let obje = new Foo(); //=> obj可以调用原型上的方法 Foo.a => 1   obje.a => 2
obje.a()// =>2 私有属性上有的方法，不会查找共有属性
Foo.a() // =>1 上一步中 Foo.a => 1 