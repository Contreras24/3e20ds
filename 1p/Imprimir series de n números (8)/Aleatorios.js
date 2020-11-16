var x=Number(prompt("Ingresa un valor"));
var y;
console.log("Los numeros aleatorios del 1 al "+x+" son: "+"<br>");
document.write("Los numeros aleatorios del 1 al "+x+" son: "+"<br>");
for(var i=1;i<11;i++){
y= Math.round(Math.random() * (x - 1))+1;
console.log(y);

}