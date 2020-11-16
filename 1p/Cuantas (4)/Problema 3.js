const x=3;
var y=1;
var res=1;
console.log("En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?"+"<br>");
for(var i=1;i<=x;i++){
    y=y*i;
}
res=((x-1)*x)/2;
console.log("La respuesta son "+res+" saludos");