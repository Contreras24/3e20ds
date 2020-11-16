mySet = new Set();
mySet.add({1: "David", 2: "Jorge",3: "Luis",4: "Pepe",5: "Javier",6: "Juan",7: "Francisco",8: "Setch",9: "Omar",10: "Brian"});

for(var i=1;i<=10;i++){
    for (let item of mySet) console.log(item[Math.floor(Math.random() * (10 - 1)) + 1]);
   
}


