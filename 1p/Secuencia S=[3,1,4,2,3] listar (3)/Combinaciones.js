var comArr = [],
  usedChars = [];
  console.log("Esta son las combinaciones posibles:");
function combi(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      comArr.push(usedChars.slice());
    }
    combi(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return comArr
};

console.log(JSON.stringify(combi([3,1,4,2,3])));