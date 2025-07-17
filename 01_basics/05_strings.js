const name = 'tabish'
const age = 24

// console.log(name + age);

console.log(`My name is ${name} & my age is ${age}`); //String Interpolation

const gameName = new String('tabish')
console.log(gameName[0]);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const Newstring = gameName.substring(2,5)
console.log(Newstring);

const anotherString = gameName.slice(-8,5)
console.log(anotherString)

const Newlystring = "    tabish    "
console.log(Newlystring);
console.log(Newlystring.trim());


const url = "http://tabish.com/tabish%2abbas"

console.log(url.replace('%2','-'));

console.log(url.includes('ayesha'));
console.log(url.includes('tabish'));


