const x=8;
var y=1;
var res=1;
console.log("De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?");
for(var i=1;i<=x;i++){
    y=y*i;
}
console.log("La respuesta son "+y+" posibles palabras");