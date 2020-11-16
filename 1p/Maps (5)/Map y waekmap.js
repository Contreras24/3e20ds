//Este es un ejemplo de weakset
var wp = new WeakMap();
var obj = {};
var foo = {};

wp.set(window);
wp.set(obj);

wp.has(window); // true
wp.has(foo);    // false, foo no fue agregado al conjunto

wp.delete(window); // elimina window del conjunto
wp.has(window);    // false, window fue eliminado


/* Este es un ejemplo de Set
var myMap = new Map();

myMap.set(1);
myMap.set(5);
myMap.set('Hola Mundo');

console.log(myMap);// Map {1, "Hola Mundo", Object {a: 1, b: 2}, Object {a: 1, b: 2}}*/