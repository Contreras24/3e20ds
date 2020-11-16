console.time('loop');
mySet= new Set();
const X=4034.287935;
const Y= 2.7182818284;
res=0;
for(var i=6;i>3;i--){
    mySet.add((Math.pow(Y,i)*10));
}
for (let item of mySet) console.log(item);

console.timeEnd('loop');


