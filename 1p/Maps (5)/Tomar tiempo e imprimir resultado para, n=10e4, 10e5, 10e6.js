console.time('loop');
myMap= new Map();
var x=4034.287935;
var y= 2.7182818284;
res=0;
for(var i=6;i>3;i--){
    myMap.set((Math.pow(y,i)*10));
}
for (let clave of myMap.keys()) console.log(clave);

console.timeEnd('loop');




