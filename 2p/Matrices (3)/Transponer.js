
let matriz = [[1,2,3],[4,5,6],[7,8,9]];

function transposeArray(matriz){
   
    return  matriz[0].map((_, colIndex) => matriz.map(row => row[colIndex]));
}
transposeArray(matriz);

