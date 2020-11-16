let x = [3,1,4,2,3];
let sum = x.reduce((previous, current) => current += previous);
let avg = sum / x.length;
console.log("El promedio es: "+avg);