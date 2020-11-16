var x=2500;
a=Number(prompt("Ingresar la hora que desea calcular"));
if(a>12||a<1){
    alert("Este valor esta fuera del rango");
}
z=prompt("am o pm?");
if(z!="am"&& z!="pm"){
    alert("Este valor esta fuera del rango");
}
console.log("Si son las "+a+", ¿qué horas serán en 2500hrs?");
if(z=="pm"){
    a=a+12;
}
var res;
for(var i=1;i<=x;i++){

    if(a==24){
    a=0;}

    a++;

}


console.log("La hora seria: ");
if(a>=1&&a<=11){
res=a;
console.log(res+"am");}
else
if(a>=12&&a<=23){
res=a-12;
console.log(res+"pm");}


