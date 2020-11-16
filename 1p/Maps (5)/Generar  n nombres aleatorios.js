var myMap = new Map();
x=Number(prompt("Ingresa cuantos nombres aleatorios deseas generar del 1-10"));
myMap.set({1: "David", 2: "Jorge",3: "Luis",4: "Pepe",5: "Javier",6: "Juan",7: "Francisco",8: "Setch",9: "Omar",10: "Brian"});

for(var i=1;i<=x;i++){
    for (var clave of myMap.keys()) console.log(clave[Math.floor(Math.random() * (x - 1)) + 1]);  
}
