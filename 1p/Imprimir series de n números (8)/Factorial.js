var x=Number(prompt("Ingresa el valor para determinar su factorial"));
var y=1;
var res;
for(var i=1;i<=x;i++){
   y=y*i;
   console.log(y); //Para ver los resultados en consola
       
}

console.log("El factorial de "+x+" es: "+y);
