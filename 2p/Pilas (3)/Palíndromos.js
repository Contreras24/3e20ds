class Stack{
    constructor() {
        this.stack = [];
    }
    push (element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length - 1];
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);  
    }
}

function findPalindrome(cadena) {
    let cleanChar = cadena.replace(/[^A-Z0-9]/ig, "").toLowerCase();
}
function findPalindrome(cadena) {
    let cleanChar = cadena.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reversedChar = cleanChar.split('').reverse().join('');
}
function findPalindrome(cadena) {
    let cleanChar = cadena.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reversedChar = cleanChar.split('').reverse().join('');
if (cleanChar === reversedChar)
return console.log("Es palindromo");
else
return console.log("No es palindromo");;

}

const stack = new Stack();
console.log(stack.push("oso"));
console.log(stack.push("skate"));
console.log(stack.push("motocross"));
console.log(stack.size());
stack.print();
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.print(findPalindrome("oso"));
stack.print(findPalindrome("motocross"));