var n=-1;
for(var i=1;i<11;i++){
    function sucesion(n){
        if (n==-1) return -1;
        return n-1;
    }
    console.log(sucesion(n));
    n=sucesion(n);
    n--;
}
