var torre1=1;
var torre2=2;
var torre3=3;
var x=4;

hanoi(x, torre1,torre2,torre3);
function hanoi(x,ori,des,aux)
{
    if(x==1)
    console.log("Mueva el disco "+x+" desde la torre "+ori+" hasta la Torre "+des);
    else 
    {
        hanoi(x-1, ori, aux,des);
        console.log("Mueva el disco "+x+" desde la torre "+ori+" hasta la Torre "+des);
    
    hanoi(x-1,aux,des,ori);
}
}