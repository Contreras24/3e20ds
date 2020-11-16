var x=1;
var y=1;
var res=[];
for(var i=1;i<11;i++){
    for(var a=1;a<11;a++){
        y++;
        y=y*x;
}
res[i]=(x-((x*x*x)/6));
console.log("El seno de "+i+" es "+res[i]+"<br>");
x++;
}