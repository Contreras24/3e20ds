var x=[];

document.write("Diez numeros aleatorios <br>");
    for(var i=1;i<11;i++){
        function getRandomInt() {
           return Math.floor(Math.random() * (10 - 1)) + 1;}
           x[i]=getRandomInt()
           console.log(x[i]+"<br>");
     
}
    