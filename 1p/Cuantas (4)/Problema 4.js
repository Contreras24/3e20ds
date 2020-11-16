const x=Number(prompt("Ingresa la cantidad de invitados que hay en la fiesta"));
var y=1;
var res=1;
console.log("En una fiesta hay "+x+" invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?");
for(var i=1;i<=x;i++){
    y=y*i;
}
res=((x-1)*x)/2;
if(res==1){
    console.log("La respuesta es "+res+" un saludo");
}
else
console.log("La respuesta son "+res+" saludos");