// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

// const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Array de lugares del universo de El Señor de los Anillos
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Se selecciona el div del HTML que tiene el atributo data-function="printHere"
const targetDiv = document.querySelector('[data-function="printHere"]');

// Se crea un elemento <ul> para contener la lista de lugares
const ulElement = document.createElement('ul');

// Recorre cada lugar en el array
places.forEach((place) => {
  // Crea un nuevo <li> por cada elemento del array
  const li = document.createElement('li');
  li.textContent = place; // Asigna el nombre del lugar como contenido de texto

  // Agrega el <li> al <ul>
  ulElement.appendChild(li);
});

// Inserta el <ul> ya completo dentro del div seleccionado
targetDiv.appendChild(ulElement);

// Mensaje de consola para confirmar
console.log("✅ Lista de lugares insertada correctamente en el div.");
