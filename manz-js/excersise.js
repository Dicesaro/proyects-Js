// Crear un programa que muestre en consola los números impares entre el 0 y el 20

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// for (let i = 1; i < numbers.length + 1; i++) {
//   if (!(i % 2 == 0)) console.log(`El numero: ${i} es impar`);
// }

// Hacer una funcion que sume 2 numeros

function sumar(num1, num2) {
  if (num1 == undefined) throw new Error("Parametro 1 no debe ir vacio");
  if (num2 == undefined) throw new Error("Parametro 2 no debe ir vacio");
  if (num1 <= 0 || num2 <= 0)
    throw new Error("Los parametros no deben ser 0 ni negativo");
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error("Los parametros deben ser numeros");
  return num1 + num2;
}
//console.log(sumar(7, 3));

/* 
  Escribir una funcion llamada calcularImpuestos() que reciba dos argumentos numericos : edad e ingresos.
  Si su edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%.
  De lo contrario retornar 0
*/

function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) return ingresos * 0.4;
  if (edad < 18) return 0;
  if (ingresos < 1000) return 0;
  if (edad == undefined) throw new Error("edad no debe estar vacio");
  if (ingresos == undefined) throw new Error("ingresos no debe estar vacio");
  if (edad <= 0 || ingresos <= 0)
    throw new Error("Los parametros no deben ser 0 ni negativo");
  if (typeof edad !== "number" || typeof ingresos !== "number")
    throw new Error("Los parametros deben ser numeros");
}
//console.log(calcularImpuestos(30, 500));

/*
  Escribir una funcion llamada pares() que reciba un arreglo de numeros y retorne un nuevo arreglo con los numeros pares
  unicamente.

  Example: 
  console.log(pares([1,2,3,4,5,6])) // [2,4,6]
  console.log(pares([])) // []
*/

// solucion 1
const numbers = [1, 2, 3, 4, 5, 6];
const pares = () => numbers.filter((num) => num % 2 == 0);

//console.log(pares());

// solucion 2
function convertPares(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i]);
    }
    return newArray;
  }
}

/*
  El indice de la masa corporal (IMC), o BMI por sus siglas en el BMI se calcula con la siguiente forma:
  peso/Math.pow(altura) . Escribir una funcion BMI que reciba 2 argumentos: peso y altura, y retorne un 
  string con las siguientes posibilidades:
  "Bajo de Peso" si el BMI < 18.5
  "Sobrepeso" si esta entre 25 y 29.9
  "Obeso" si es igual o mayor a 30
*/

function bmiCalculator(peso, altura) {
  calculo = peso / (altura * altura);

  if (calculo < 18.5) return console.log("Bajo Peso");
  if (calculo >= 25 || calculo <= 29) return console.log("Sobrepeso");
  if (calculo > 30) return console.log("Obeso");

  if (peso == undefined || altura == undefined)
    throw new Error("Los parametros no deben ir vacio");
  if (peso == NaN || altura == NaN)
    throw new Error("Los parametros deben ser numeros");
  if (peso == 0 || altura == 0)
    throw new Error("Los parametros no pueden ser 0");

  return calculo;
}

//console.log(bmiCalculator(120, 0));

/*
  Escribe una funcion llamada likes() que reciba un numero y retorne un string utilizando el formato 
    K : miles , M: millones
    1400 se conviente en 1k
    7,456,345 se convierte en 7M
  Si el numero es menor a 1000 se debe devolver el mismo numero como un string
*/

function likes(num) {
  for (let i = 0; i < num; i++) {
    if (num >= 1000) return `${String(num).replace(/0/g, "")}K`;
    if (num >= 1000000) return `${String(num).replace(/0/g, "")}M`;
    if (num < 1000) return `${num.toString()}`;
  }
}

console.log(likes(1000));

/*
  Ejercicio 6
*/

/*
  En este caso, crearemos una función llamada multiply que toma dos números y una función de callback. Esta función multiplicará los dos números y luego llamará a la función de callback con el resultado.
*/

const multiply = (fNum, sNum) => fNum * sNum;

const callback = (multiply) => multiply;

setTimeout(() => {
  console.log(callback(multiply(20, 5)));
}, 2000);

/*
  Este ejercicio solo te pide que crees un array de nombre week para contener 7 elementos. 
  Luego rellena el array con los nombres de los días comenzando por Lunes hasta Domingo. 
  Muestra en la consola ==> console.table(daysOfWeek)
*/

const week = [];

const daysOfWeek = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miercoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sabado",
  domingo: "Domingo",
};
const pushingArray = week.concat(Object.values(daysOfWeek));

console.table(pushingArray);

/*
  Crea un Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto
  para recorrer el array y convertir cada elemento de ese array a mayúsculas 
  console.table() para ver el resultado.
*/

const daysWorking = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const allToMayus = daysWorking.map((day) => day.toUpperCase());

console.log(allToMayus);

/*
  Crea un array para albergar al menos 10 números enteros, luego rellena el array (o créalo ya con los valores).
  El ejercicio trata de crear a partir de este array otros dos uno con los números pares y otro con los impares. No debes usar bucles, usa el método del array que creas más apropiado.
*/

const arrayOfNumbers = [23, 12, 6, 24, 9, 2, 13, 7, 11, 44];

console.log(arrayOfNumbers.filter((num) => num % 2 === 0));
console.log(arrayOfNumbers.filter((num) => num % 2 !== 0));

/*
  Crea un array de al menos 10 elementos para guardar números enteros. Usa un método para obtener la suma de los números pares y la de los números impares.
*/

const arrayWithNumbers = [];

for (let i = 0; i < 10; i++) {
  const numberAleatorio = Math.round(Math.random() * 20);
  arrayWithNumbers.push(numberAleatorio);
}

const gettingPares = arrayWithNumbers.filter(
  (num) => num % 2 === 0 && num !== 0
);
const sumandoPares = gettingPares.reduce(
  (total, current) => total + current,
  0
);

const gettingImpares = arrayWithNumbers.filter((num) => num % 2 !== 0);
const sumandoImpares = gettingPares.reduce(
  (total, current) => total + current,
  0
);

console.log(arrayWithNumbers);
console.log(
  `Los pares son: ${gettingPares} y la suma de ellos es: ${sumandoPares}`
);
console.log(
  `Los impares son: ${gettingImpares} y la suma de ellos es: ${sumandoImpares}`
);

/*
  Escribe una función que reciba como argumento un array y que devuelva una cadena de caracteres 
  formada por los elementos del array separados por un guión . 
  Si llamamos a la función como listar(["rojo", "verde", "azul") deberá devolver "rojo-verde-azul"
*/

const colors = ["rojo", "verde", "azul"];

const libros = ["Luna de Pluton", "Ciudad de los Perror", "El Chamo"];

function caracteres(arrays) {
  return arrays.join("-");
}
console.log(caracteres(libros));

/*
  En este script deberás crear un array para guardar los nombres de los días de la semana, empezando
  por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve
  el nombre del día. Se supone que el dato tecleado estará entre 0 y 6 
*/

const daySemana = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

function findDayByIndex(array, i) {
  if (i >= 0 && i < array.length) return array[i];
  if (!(i >= 0 && i < array.length)) "Índice fuera de rango";
}
console.log(findDayByIndex(daySemana, 5));

/* 
  Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para traduicr los valores true y false. 
  Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 
  y falso en el caso contrario. 
*/
const numbersForShow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const booleans = [true, false];

function numbersExists(array, newArray, num) {
  if (num >= 0 && num < array.length) return newArray[0];
  if (!(num >= 0 && num < array.length)) return newArray[1];
}

console.log(numbersExists(numbersForShow, booleans, 10));
console.log(numbersForShow.length);

/*
  Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso.
  Una vez creado rellénalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones
*/

const students = [
  ["Juan", 19], // 0
  ["Maria", 20], // 1
  ["Roberto", 16], // 2
  ["Melany", 17], // 3
];

function sortingStudents(ordener) {
  if (ordener == 0) return students.sort((a, b) => a[1] - b[1]);
  if (ordener == String) return `El parametro "${ordener}" no es un Numero`;
}

console.log(sortingStudents(0));

const miObjeto = {
  name: "Juan",
  age: 19,
};

let saludo = "Hola mundo";
console.log(saludo);

function suma(a, b) {
  return a + b;
}
console.log(suma(2, 4));
