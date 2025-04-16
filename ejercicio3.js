// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.


// 📌 Ejercicio 3

// 1.1 Crear una lista <ul> con <li> para cada país
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Se crea el elemento ul
const countryList = document.createElement('ul');

// Se recorre el array y por cada país se crea un <li> y se agrega al ul
countries.forEach(country => {
  const li = document.createElement('li'); // Crear <li>
  li.textContent = country;                // Asignar texto
  countryList.appendChild(li);             // Insertar <li> en <ul>
});

// Se inserta la lista en el body
document.body.appendChild(countryList);
console.log('✅ Lista de países creada:', countryList);


// 1.2 Eliminar el elemento con clase .fn-remove-me
const elementToRemove = document.querySelector('.fn-remove-me'); // Seleccionar el elemento
if (elementToRemove) {
  elementToRemove.remove(); // Eliminarlo del DOM
  console.log('🗑️ Elemento con clase .fn-remove-me eliminado');
}


// 1.3 Crear <ul> con <li> en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carList = document.createElement('ul'); // Crear ul

cars.forEach(car => {
  const li = document.createElement('li'); // Crear li
  li.textContent = car;
  carList.appendChild(li); // Añadir li al ul
});

// Seleccionar el div por el atributo data-function
const printHereDiv = document.querySelector('[data-function="printHere"]');
printHereDiv.appendChild(carList); // Insertar la lista dentro del div
console.log('🚗 Lista de coches insertada en el div con data-function="printHere"');


// 1.4 Crear divs con título (h4) e imagen (img) dinámicamente
const countryData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, 
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.createElement('div'); // Contenedor para todos los elementos

countryData.forEach((item, index) => {
  const div = document.createElement('div'); // Crear div por cada item
  div.style.border = '1px solid #ccc';
  div.style.margin = '10px';
  div.style.padding = '10px';

  const h4 = document.createElement('h4'); // Crear título
  h4.textContent = item.title;

  const img = document.createElement('img'); // Crear imagen
  img.src = item.imgUrl;
  img.alt = 'Imagen aleatoria';
  img.style.width = '100%';

  // 1.6 Crear botón que elimina su propio div
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar este';
  deleteBtn.style.marginTop = '10px';
  deleteBtn.addEventListener('click', () => {
    div.remove(); // Elimina el div que contiene el botón
    console.log(`🧹 Div número ${index + 1} eliminado`);
  });

  // Agregar elementos al div
  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(deleteBtn);

  // Insertar el div en el contenedor
  container.appendChild(div);
});

document.body.appendChild(container); // Insertar todos los divs al body
console.log('🌍 Divs con imágenes y títulos insertados');


// 1.5 Botón para eliminar el último div
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
deleteLastBtn.style.margin = '20px';
deleteLastBtn.style.display = 'block';
deleteLastBtn.addEventListener('click', () => {
  const lastDiv = container.lastElementChild;
  if (lastDiv) {
    lastDiv.remove();
    console.log('❌ Último div eliminado');
  } else {
    console.log('⚠️ No hay más divs que eliminar');
  }
});

document.body.insertBefore(deleteLastBtn, container);
