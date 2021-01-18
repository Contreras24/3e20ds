function Queue() {  
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {     
    this.dataStore.push(element);
}   

function dequeue() {           
    return this.dataStore.shift();
}  

function front() {
    return this.dataStore[0];
} 

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
} 

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function bailadores(name, sex) {
    this.name = name;
    this.sex = sex;
}  

function baile(males, females) {
    console.log("The dancer are \n");
    while (!females.empty() && !males.empty()) {
        person1 = females.dequeue();
        person2 = males.dequeue();
        console.log(person1.name+" and " + person2.name);
    }
    console.log();
}  

let maleDancers = new Queue();  
let femaleDancers = new Queue();    

maleDancers.enqueue(new bailadores("David","M"));    
maleDancers.enqueue(new bailadores("Juan","M"));
maleDancers.enqueue(new bailadores("Luis","M"));
maleDancers.enqueue(new bailadores("Mike","M"));
maleDancers.enqueue(new bailadores("Gustavo","M"));

femaleDancers.enqueue(new bailadores("Alondra","F"));    
femaleDancers.enqueue(new bailadores("Susy", "F"));
femaleDancers.enqueue(new bailadores("Maria","F"));
femaleDancers.enqueue(new bailadores("Fany","F"));
femaleDancers.enqueue(new bailadores("Amy","F"));

baile(maleDancers, femaleDancers); 
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " Ready for dance");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " Ready for dance");
}