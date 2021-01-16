let matriz = [[1,2,3],[4,5,6],[7,8,9]];
let arr;
let x=Number(prompt("Ingresa el numero de la fila que desea sacar"));
console.log("La matriz es: \n");
console.log(matriz);

function deleteRow(arr, matriz) {
    arr = arr.slice(0); // make copy
    arr.splice(matriz - 1, 1);
    return arr;}
    
console.log(deleteRow(matriz, x));

