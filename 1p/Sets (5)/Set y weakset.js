//Este es un ejemplo de weakset
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo no fue agregado al conjunto

ws.delete(window); // elimina window del conjunto
ws.has(window);    // false, window fue eliminado


/* Este es un ejemplo de Set
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('Hola Mundo');

mySet.add({a: 1, b: 2}); // La variable "o" referencia a otro objeto, por lo que agrega otro valor.
mySet.size

console.log(mySet);// Set {1, "Hola Mundo", Object {a: 1, b: 2}, Object {a: 1, b: 2}}*/