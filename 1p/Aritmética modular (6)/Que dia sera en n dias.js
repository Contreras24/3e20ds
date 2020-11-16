var z=Number(prompt("Ingresa el numero del dias"));
var x=0;
var a;
if(z==1){
    console.log("Si hoy es lunes, qué dia será en un "+z+" dia?");
}
else
console.log("Si hoy es lunes, qué dia será en "+z+" dias?");
for(var i=0;i<=z;i++){
    if(x==7){
    x=1;}
    else
    x++;
    }


if(x==1){
    a="Lunes";}
    else

if(x==2){
    a="Martes";}
    else

if(x==3){
    a="Miercoles";}
    else

if(x==4){
    a="Jueves";}
    else

if(x==5){
    a="Viernes";}
    else

if(x==6){
    a="Sabado";}
    else

if(x==7){
    a="Domingo";}


    console.log("El dia es: "+a);