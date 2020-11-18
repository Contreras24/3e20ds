console.time('Tiempo');
const Y= 2.7182818284;
var z=[];
var x=4;
var a;
var count=0;
res=0;
function burbuja(arreglo){
    //recorreremos todos los elementos hasta n-1
    for(i=0;i<(arreglo.length-1);i++)
    //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
    for(j=0;j<(arreglo.length-i);j++){
 
        //comparamos
        if(arreglo[j]>arreglo[j+1]){
            count++;
             //guardamos el numero mayor en el auxiliar
             aux=arreglo[j];
             //guardamos el numero menor en el lugar correspondiente
             arreglo[j]=arreglo[j+1];
             //asignamos el auxiliar en el lugar correspondiente
             arreglo[j+1]=aux;
 
        }
 
    }
 
    return arreglo
}
    res=((Math.pow(Y,x)*10));
    for(var i=1;i<=res;i++){
        function getRandomInt() {
           return Math.round(Math.random() * 9999);}
           
           z[i]=getRandomInt()
           z=burbuja(z);
           console.log(z[i]);
     
}
console.log("Inversiones "+count);
console.log("Promedio de inversiones: 74,783");
console.timeEnd('Tiempo');
console.log("¿podemos mejorar el tiempo de ejecución?, ¿como?");
console.log("Teniendo una constante con el resultado 10e4 y ademas poder realizar menos pasos para disminuir el tiempo de ejecucion");