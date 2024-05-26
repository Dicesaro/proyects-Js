let newString = "This is a new String, ";
let stringatconcat = "string concatenado, string";
let word = "Word";
let suma = "    1 + 1 = 2    ";
const regex = /[a-s]/g;

console.log(newString);

console.log(newString.length);

console.log(newString.concat(stringatconcat));

console.log(stringatconcat.includes("/"));

console.log(newString.endsWith(", "));

console.log(stringatconcat.indexOf("s"));

console.log(stringatconcat.lastIndexOf("s"));

console.log(newString.match(regex));

console.log(word.repeat(3));

console.log(word.replace("Word", "Words"));

console.log(newString.slice(14, 20));

console.log(word.split("").join("-").trim());

console.log(word.startsWith("W"));

console.log(word.toLocaleLowerCase());
console.log(word.toLocaleUpperCase().trim());

console.log(suma.trim());
