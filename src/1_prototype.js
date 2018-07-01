/**
 * 父类-动物
 * @param {String} name 名称
 * @param {Number} age 年龄
 */
let Animal = function(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype = {
    constructor: Animal,
    talk: function () {
        console.log(`Hi i am an animal ${this.age}`);
    }
}
/**
 * 子类-狗
 * @param {Strin} name 名称
 * @param {Number} age 年龄
 * @param {Number} height 高度
 */
var Dog = function(name, age, height) {
    Animal.call(this, name, age);
    this.height = height;
}

Dog.prototype = Object.create(Animal.prototype, {
    bark: {
        value: function() {
            console.log(`wangwang ${this.height}`);
        }, 
        enumerable: true, 
        configurable: true, 
        writable: true 
    },
    talk : { 
        value: function() { 
            // override 方法重写
            //console.log(`Hi i am an animal ${this.height}`);
            // 方法继承
            Animal.prototype.talk.apply(this, arguments); 
        },
        enumerable: true,
        configurable: true, 
        writable: true
    }
})

Dog.prototype.constructor = Dog;

let animal = new Animal('Li', 11);
animal.talk();
console.log(animal);

let dog = new Dog('deng', 23, '100px');
dog.bark();
dog.talk();
console.log(dog);

/**
 * Array 拓展原生对象
 * @param {Number} age 年龄
 */
Array.prototype.sayHello = function(age) {
    console.log(`Hey gay, i am ${this.name}, i am ${age}`);
}

let arr = new Array();
arr = [1, 2, 3, 4];
arr.name = 'dd';
console.log(arr)
arr.sayHello(33)











