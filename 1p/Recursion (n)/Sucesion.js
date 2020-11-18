for(var n=1;n<11;n++){
    function sucesion(n){
        if (n<=1) return 1;
        return 2+sucesion(n-1);
    }
    console.log(sucesion(n));}