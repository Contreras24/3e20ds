var x=2500;
a=10;
var res;

console.log("Si son las 10 am, ¿qué horas serán en 2500hrs?");
for(var i=1;i<=x;i++){

    if(a==0){
    a=24;}

    a--;

}
res=a;
console.log("La hora seria: ");
if(a>=1&&a<=12)
console.log(res+"am");
else
console.log(res+"pm");