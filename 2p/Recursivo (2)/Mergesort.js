var array = [];
var y=Number(prompt("Ingresa cuantos valores tendra el array"));
var x;
for(var i=1;i<=y;i++){
    array.push(x=(Number(prompt("Ingresa los numeros del array"))));
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

console.log(mergeSort(array));