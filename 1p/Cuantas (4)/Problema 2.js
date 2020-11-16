const x=Number(prompt("Ingresa la cantidad de simbolos de un alfabeto que desea saber su permutacion"));
var y=1;
var res=1;
console.log("De un alfabeto de "+x+" símbolos cuantas palabras de "+x+" símbolos podemos generar?");
for(var i=1;i<=x;i++){
    y=y*i;
}
console.log("La respuesta son "+y+" posibles palabras");