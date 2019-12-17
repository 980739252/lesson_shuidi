function  Person(name) {
    this.name =name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}
const qing = new Person('琴');
console.log(qing.getName());
//构造函数                     
console.log(Person.prototype.constructor);
console.log(qing.__proto__,Person.prototype,
qing.__proto__==Person.prototype);