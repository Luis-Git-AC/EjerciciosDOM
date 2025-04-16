// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

// 1.3 Usa querySelector para mostrar por consola todos los p

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

// 1.1 Selecciona el botón que tiene la clase 'showme'
const showmeButton = document.querySelector('.showme');
// Muestra el botón en consola para comprobar que se ha seleccionado correctamente
console.log('Botón con clase .showme:', showmeButton);

// 1.2 Selecciona el elemento <h1> con el id 'pillado'
const h1Pillado = document.querySelector('#pillado');
// Muestra el h1 en consola
console.log('Elemento h1 con id #pillado:', h1Pillado);

// 1.3 Selecciona todos los elementos <p> del documento
const allParagraphs = document.querySelectorAll('p');
// Muestra la lista de párrafos encontrados
console.log('Todos los elementos <p>:', allParagraphs);

// 1.4 Selecciona todos los elementos que tienen la clase 'pokemon'
const allPokemon = document.querySelectorAll('.pokemon');
// Muestra los elementos con la clase 'pokemon'
console.log('Elementos con clase .pokemon:', allPokemon);

// 1.5 Selecciona todos los elementos que tienen el atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
// Muestra los elementos con el atributo data-function="testMe"
console.log('Elementos con atributo data-function="testMe":', testMeElements);

// 1.6 Selecciona el tercer elemento (índice 2) con el atributo data-function="testMe"
const thirdTestMe = testMeElements[2];
// Muestra el tercer personaje con el atributo indicado
console.log('Tercer elemento con data-function="testMe":', thirdTestMe);
