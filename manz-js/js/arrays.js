//¿Qué es un array?
//Es una colección o agrupación de elementos en una misma variable

//¿Qué son las Array functions?

const letters = ["a", "b", "c", "d", "e"];

let usingWith = letters.with(1, "B");
//console.log(usingWith);
//console.log(letters);

letters.forEach((letter, index) => {
  //console.log(`Las primeras letras del ABC son : ${letter}`);
});

letters.push("f");
//console.log("---------------");

letters.forEach((letter, index) => {
  //console.log(`Las primeras letras del ABC son : ${letter}`);
});

//console.log(letters.includes("z"));
//console.log(letters.includes("c"));

// ---------------- Modificar o crear subarrays ----------------

let letterss = ["a", "b", "c", "d", "e", "f", "g", "h"];

// .slice() -- NO MUTA
let usingSlice = letterss.slice(0, 5);
//console.log(usingSlice);

// .splice() -- MUTA EL ARRAY ORIGINAL
let usingSplice = letterss.splice(3, 3);
//console.log(usingSplice);

// restaurando el array original
let restaured = letterss.concat(usingSplice).sort();

// ---------------- Buscar elementos en un array ----------------

// ¿El elemento existe? - (includes) -- NO MUTA
let usingIncludes = letterss.includes("g");
//console.log(usingIncludes);

// Buscar la posición - (indexOf) -- NO MUTA
let usingIndexOf = restaured.indexOf("h");
//console.log(usingIndexOf);

// Buscar al final - (lastIndexOf) -- NO MUTA
let usingLastIndexOf = restaured.lastIndexOf("h", 7);
//console.log(usingLastIndexOf);
