var x=2;
var y=1;
var n1=[];
var n2=[];

console.log("El quinto numero de la secuencia de Lucas. ");
for(var i=1;i<=5;i++){
    
 n1[i]=x;
 n2[i]=y;


x=x+y;
y=x+y;

}
console.log(n1[3]);