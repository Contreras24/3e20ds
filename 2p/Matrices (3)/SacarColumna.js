let matriz = [[1,2,3],[4,5,6],[7,8,9]];
let x=Number(prompt("Ingresar la columna que desea sacar"));
let z;
if(x==1)
z=0;
if(x==2)
z=1;
if(x==3)
z=2;

console.log("La matriz es: \n");
console.log(matriz);

function getCol(matriz, col){
    var column = [];
for(var i=0; i<matriz.length; i++){
    column.push(matriz[i][col]);
 }
 return column;
}
 getCol(matriz, z);
