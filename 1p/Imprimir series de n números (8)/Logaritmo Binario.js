var x=Number(prompt("Ingresa el valor para calcular su Logaritmo Binario"));
var y=1,res;
for(var i=1;i<=x;i++){
     res=Math.log2(y);
     console.log("El logaritmo binario de "+i+" es: "+res);
     
     
     y++;
    }