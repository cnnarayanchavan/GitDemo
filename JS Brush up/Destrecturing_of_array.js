let arr =[8,4,6,3];
let [a,s,d,f] = arr;
//console.log(d);

//so this is how destrecturing of arrays works


//now lets destrecture the string array 

let Name = "My name is Narayana Chavan";
//first we will have to convert it into array so
//const Arr = Name.split(' ');
//console.log(Arr);

//but insted of doing this like assigning to variable i can simply use split method directly

let nam = "My name is Narayana Chavan".split(' ');
console.log(nam.length);
let [p,q,r,m,t] = nam
console.log(t);

//so this is how we destrecture the string array

//note : ignor the typo focus on understanding concepts