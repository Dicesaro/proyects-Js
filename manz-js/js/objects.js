let pets = [
  {
    id: 1,
    name: "Felix",
    type: "Gato",
    age: 3,
    sonido: "Maullido",
    feeding: "Herbivoro",
    owner: {
      name: "Luis",
      age: 23,
      nationality: "Peruvian",
    },
  },
  {
    id: 2,
    name: "Max",
    type: "Hiena",
    age: 5,
    sonido: "Ladrido",
    feeding: "Carroñero",
    owner: {
      name: "Ade",
      age: 34,
      nationality: "Nigerian",
    },
  },
  {
    id: 3,
    name: "Liz",
    type: "Lechuza",
    age: 2,
    sonido: "Ulular",
    feeding: "Carnivoro",
    owner: {
      name: "Harry",
      age: 18,
      nationality: "Argentinian",
    },
  },
  {
    id: 4,
    name: "Bella",
    type: "Caballo",
    age: 10,
    sonido: "Relincho",
    feeding: "Herbivoro",
    owner: {
      name: "Maria",
      age: 20,
      nationality: "Mexican",
    },
  },
];

const products = {};

// Obtener datos por id
// function getDataById(pets, id) {
//   if (Array.isArray(pets)){
//     const filterPets = pets.find((pet) => pet.id === id);
//     if (filterPets) return filterPets;
//     else throw new Error(`Pet con id "${id}" no existe`);
//   } else throw new Error("No es un array")
//   //return filterPets;
// }
// console.log(getDataById(products, 2));

// Ordenar asc - desce
function sortObjects(ordener) {
  if (ordener == "descendente") return pets.sort((a, b) => b.age - a.age);
  if (ordener == "ascendente") return pets.sort((a, b) => a.age - b.age);
  if (ordener === Number) return `El parametro "${ordener}" no es un Numero`;
}
console.log(sortObjects("descendente"));

const owners = pets.map((pet) => pet.owner);
console.log(owners);

/*********************************************** */

//uso de método foreach()
//nos retorna una cadena de texto que describe a las mascotas
function Items(pets) {
  pets.forEach((pet) => {
    console.log(
      `${pet.name} es un ${pet.type} de ${pet.age} años, hace ${pet.sonido} y es ${pet.feeding}`
    );
  });
}
Items(pets);

//uso de metodo find()
//usando el name del dueño me trae el array de la mascota
function findItems(pets, name) {
  const petOwner = pets.find((pet) => pet.owner.name === name);
  if (petOwner) {
    return petOwner;
  } else {
    return `Mascota no encontrada nombre de dueño '${name}'no existe`;
  }
}
const petsOwner = findItems(pets, "Ade");
console.log(petsOwner);

//uso de los metodos filter, include y map
//funcion que retorne solo los nombres de las  mascotas con una vocal especifica
function filterItem(pets, vocal) {
  return pets
    .filter((pet) => pet.name.toLowerCase().includes(vocal.toLowerCase()))
    .map((pet) => pet.name);
}
const petsVocal = filterItem(pets, "1");
console.log(petsVocal);

console.log(typeof pets);
