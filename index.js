//1、循环
// for(var i=0; i<10; i++) {
//     console.log(i);
// }
// console.log(i);

//2、数组
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d);

// let [a,b="cxf"] = ["陈晓飞", undefined];
// console.log(a+b);

// let [a,b="cxf"] = ["陈晓飞",null];
// console.log(a+b);

// let {foo,bar} = {bar:'陈晓飞',foo:'cxf'};
// console.log(foo+bar);

// let foo;
// ({foo} = {foo:'cxf'});
// console.log(foo);

// const [a,b,c,d] = 'zhou';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function taiji(...arg) {
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// let arr1 = ['www','taiji','com'];
// let arr2 = arr1;
// console.log(arr2);
// let arr3 = [...arr1];
// console.log(arr3);
// arr3.push('cxf');
// console.log(arr3);
// console.log(arr1);

// function taiji(first,...arg) {
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

//剩余扩展符
// function taiji(first,...arg) {
//     for(let val of arg) {
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

//字符连接方法
// let cxf = '陈晓飞';
// let cxf2 = '陈晓飞2';
// let blog = '哦豁'+cxf+'不得了';
// let blog2 = `<br>柑橘不错</br>，很可以${cxf2}`;
// document.write(blog);
// document.write(blog2);

// 判断字符位置与存在否
// let cxf = '陈晓飞';
// let blog = '感觉非常的不错陈晓飞';
// document.write(blog.indexOf(cxf));
// document.write(blog.includes(cxf));

//判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('cxf'));
// console.log(Number.isFinite(NaN));//特殊的非数字
// console.log(Number.isFinite(undefined));

//判断NaN
//ES5的判断方法
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log('*****************');
// //ES6判断方法
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));

//转化
// let a = 918.1;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

//整数取值范围操作
// let cxf = Math.pow(2,53)-1;
// console.log(cxf);

//把json转成数组
// let json ={
//     '0':'cxf',
//     '1':'taiji',
//     '2':'员工',
//     length:3 //必须写length
// }
// let arr = Array.from(json);
// console.log(arr);

//Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8];
// var v = arr.find((value,index,arr)=>{
//     return index > 4;//找到大于4的索引
// })
// console.log(v);

// let arr1 = [1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value)=> value>4);
// console.log(i);

// let arr = ['cxf','陈晓飞','taiji','你好'];
// arr.fill('web',1,3);//左闭右开
// console.log(arr);

//数组去重
// var myArr = [1, 3, 4, 5, 6, 3, 7, 4];
// console.log(myArr.filter((value, index, arr) =>
//     arr.indexOf(value) === index)
// );

//for...of数组索引 
// let arr = ['cxf','陈晓飞','taiji'];
// for(let index of arr.keys()){
//     console.log(index);
// }

//同时输出索引和值
// let arr = ['cxf','陈晓飞','taiji'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries切分数组
// let arr = ['cxf', '陈晓飞', 'taiji'];
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

//ES6箭头函数
//ES5写法
//'use strict' //严谨模式
// function add(a,b=1) {
//     //'use strict'//变量有默认值的时候严谨模式不放在函数体内
//     if(a === 0) {
//         throw new Error('这是一个错误');
//     }
//     return a+b;
// }
// console.log(add(1));
// console.log(add.length);

//ES6箭头函数
// var add = (a, b = 2) => a + b;
// console.log(add(1));

// var add = (a, b = 1) => {
//     console.log('taiji');
//     return a + b;
// }
// console.log(add(3));

//对象的函数解构
// let json = {
//     a:'cxf',
//     b:undefined
// }
// function fun({a,b='web'}) {
//     console.log(a,b);
// }
// fun(json);

//数组的函数解构
// let arr = ['cxf', '陈晓飞', 'taiji'];
// function fun(a, b, c, d) {
//     console.log(a, b, c, d);
// }
// fun(...arr);

//in的用法:判断是否存在与obj中
// let obj ={
//     a:'cxf',
//     b:'陈晓飞'
// }
// console.log('c' in obj);//c指的是key值

//数组判断
// let arr = [,,,];
// console.log(arr.length);
// console.log(0 in arr);  //0指的是数组下标位置
// let arr1 = ['cxf','陈晓飞','taiji'];
// console.log(0 in arr1);

//数组遍历 foreach
// let arr = ['cxf', '陈晓飞', 'taiji'];
// arr.forEach((val, index) =>
//     console.log(index, val)
// );

//数组遍历 filter过滤用的多
// let arr = ['cxf', '陈晓飞', 'taiji'];
// arr.filter(x => console.log(x));

//数组遍历、替换 map
// let arr = ['cxf', '陈晓飞', 'taiji'];
// console.log(arr.map(x => 'web'));

//数组转成字符串
// let arr = ['cxf', '陈晓飞', 'taiji'];
// console.log(arr.toString);
// console.log(arr.join('|')); //将间隔替换成某符号

//对象赋值
// let name = 'cxf';
// let skill = 'web';
// var obj = {name, skill};
// console.log(obj);

//key值构建
// let key = 'skill';
// var obj ={
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象方法
// let obj = {
//     add:function(a,b) {
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

//Onject.is()对象比较
// let obj1 = {name:'cxf'};
// let obj2 = {name:'cxf'};
// console.log(obj1.name === obj2.name);
// console.log(Object.is(obj1.name,obj2.name));

//===同值相等，is严格相等
// console.log(+0 === -0);
// console.log(NaN === NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//合并数组
// let a = {a:'cxf'};
// let b = {b:'陈晓飞'};
// let c = {c:'taiji'};
// let d = Object.assign(a,b,c);
// console.log(d);

//Symbol
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

//Symbol的打印
// let cxf = Symbol('陈晓飞');
// console.log(cxf);
// console.log(cxf.toString());

//Symbol在对象的应用
// let cxf = Symbol();
// let obj = {
//     [cxf]:'陈晓飞'
// }
// console.log(obj[cxf]);
// console.log(obj.cxf);//这样取值取不到
// obj[cxf] = '周大卓';
// console.log(obj[cxf]);

//Symbol对象元素的保护作用
// let obj = {name:'cxf', skill:'web', age:18};
// for (let item in obj) {
//     console.log(obj[item]);
// }

// let obj = {name:'邓志敏的爹', skill:'web'};
// let age = Symbol();
// obj[age] = 18;
// console.log(obj);
// for (let i in obj) {
//     console.log(obj[i]);
// }
// console.log(obj[age]);

//set的声明   不允许有重复的值，会自动去重
// let setArr = new Set(['cxf', '陈晓飞', 'web', 'web',]);
// setArr.add('前端技术');//增
// console.log(setArr);
// setArr.delete('前端技术');//删  setArr.clear()删除全部
// console.log(setArr);
//对象长度
// console.log(setArr.size);

//eg
// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x =>
//     s.add(x)
// );
// for(let i of s) {
//     console.log(i);
// }

//has查找set中的值判断是否存在
// let setArr = new Set(['cxf', '陈晓飞', 'web', 'web',]);
// console.log(setArr.has('cxf'));
// //循环
// for (let i of setArr) {
//     console.log(i);
// }
// setArr.forEach((value) =>
//     console.log(value)
// );

//WeakSst对象
// let weakObj = new WeakSet();
// let obj = { a: 'cxf', b: '陈晓飞' };
// let obj2 = obj;
// weakObj.add(obj);
// weakObj.add(obj2);//会去重
// console.log(weakObj);

//Map数据类型
// let json = {
//     name: 'cxf',
//     skill: 'web'
// };
// console.log(json.name);
// var map = new Map();
// map.set(json, 'I am');
// console.log(map);
// map.set('cxf', json);   //key和value类型多
// console.log(map);
//map增删查
//get取值
// console.log(map.get(json));
//size
// console.log(map.size);
//has 只能判断key
// console.log(map.has(json));
// console.log(map.has('I am'));

//map转成数组
// const myMap = new Map()
//     .set(true, 7)
//     .set({ foo: 3 }, ['cxf']);
// const arr = [...myMap];
// console.log(arr);

//Proxy预处理  改变对象默认方法
// let obj = {
//     add:function(val) {
//         return val+100;
//     },
//     name:'cxf'
// }
// console.log(obj.add(12));
// console.log(obj.name);

// const employee = {
//     firstname: 'zhou',
//     lastname: 'zhuo'
// };
// console.group('employee');
// console.log(employee.firstname);
// console.log(employee.lastname);
// console.log(employee.org);
// console.log(employee.fullname);
// console.groupEnd();

// let handler = {
//     get: function (target, fieldName) {  //target是目标对象

//         if (fieldName === 'fullName') {
//             return `${target.firstname} ${target.lastname}`;
//         }

//         return fieldName in target ?
//             target[fieldName] : `No such property as, '${fieldName}'!`
//     }
// };
// let p = new Proxy(employee, handler);
// console.group('proxy');
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.org);
// console.log(p.fullName);

//改变set方法
// const validator = {
//     set: function (obj, prop, value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('Age is always an Integer, Please Correct it!');
//             }
//             if (value < 0) {
//                 throw new TypeError('This is insane, a negative age?');
//             }
//         }
//     }
// };

//get-set
// let pr = new Proxy(employee, validator);
// pr.age = 12;

// var pro = new Proxy({
//     add: function (val) {
//         return val + 100
//     },
//     name: 'I am cxf',
// }, {
//     //get
//     get: function (target, key, property) {
//         console.log('Get方法' + target[key]);
//         return target[key];
//     },
//     set: function (target, key, value, recriver) {
//         console.log(` setting ${key} = ${value}`);
//         return target[key] = value + '12';
//     }
// });
// console.log(pro.add(3));
// console.log(pro.name);
// pro.name = '陈晓飞';
// console.log(pro.name);

//apply的使用
// let target = function (val) {
//     console.log('I am cxf');
//     return val += 100
// }
// let handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target, handler);
// console.log(pro(12));

//promise对象
//一个事务：resolved完成态、rejected失败态、pending未完成态
//只有一步的操作，不可逆反，状态确定就不可更改
// let state = 1;
// function step1(resolve, reject) {
//     console.log('1.开始-洗菜做饭');
//     if (state == 1) {
//         resolve('洗菜做饭完成')
//     } else {
//         reject('洗菜做饭-错误')
//     }
// }
// // // // //
// function step2(resolve, reject) {
//     console.log('2.开始-坐下来吃饭');
//     if (state == 1) {
//         resolve('坐下来吃饭')
//     } else {
//         reject('坐下来吃饭-错误')
//     }
// }
// // //
// function step3(resolve, reject) {
//     // state = 0;
//     console.log('3.开始-收拾桌子');
//     if (state == 1) {
//         resolve('收拾桌子')
//     } else {
//         reject('收拾桌子-错误')
//     }
// }
// // // //
// new Promise(step1).then(function (val) {
//     console.log(val);
//     return new Promise(step2);
// }).then(function (val) {
//     console.log(val);
//     return new Promise(step3);
// }).then(function (val) {
//     console.log(val);
// });

//class 类的声明、实例化、使用
class Coder {
    name(val) {
        console.log(val);
        return val;
    }

    skill(val) {
        console.log(this.name('陈晓飞') + ':' + 'skill-' + val);
    }

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add(val) {
        return this.a + this.b;
    }
}
cxf = new Coder(11, 12);
console.log(cxf.add());

// let cxf2 = new Coder;
// cxf2.name('cxf');
// cxf2.skill('web');

// let cxf = new Coder;
// cxf.name('陈晓飞');

//类的继承
class htmler extends Coder {
    
}


