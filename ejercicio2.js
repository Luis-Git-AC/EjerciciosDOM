// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

// 1.1 Inserta dinámicamente en un HTML un div vacío con JavaScript
const emptyDiv = document.createElement("div"); // Se crea un div vacío
document.body.appendChild(emptyDiv); // Se añade al final del body
console.log("1.1 Div vacío insertado:", emptyDiv);

// 1.2 Inserta un div que contenga una p
const divWithP = document.createElement("div"); // Se crea el div
const pInside = document.createElement("p"); // Se crea el párrafo
pInside.textContent = "Soy un párrafo dentro del div"; // Se asigna texto
divWithP.appendChild(pInside); // Se agrega el párrafo al div
document.body.appendChild(divWithP); // Se añade al body
console.log("1.2 Div con un párrafo:", divWithP);

// 1.3 Inserta un div con 6 p utilizando un loop
const divWith6P = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = `Párrafo número ${i}`;
  divWith6P.appendChild(p);
}
document.body.appendChild(divWith6P);
console.log("1.3 Div con 6 párrafos:", divWith6P);

// 1.4 Inserta una p con el texto 'Soy dinámico!'
const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);
console.log("1.4 Párrafo dinámico:", dynamicP);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const targetH2 = document.querySelector(".fn-insert-here");
targetH2.textContent = "Wubba Lubba dub dub";
console.log("1.5 Texto insertado en h2:", targetH2);

// 1.6 Crear una lista ul > li a partir del array
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
apps.forEach(app => {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);
console.log("1.6 Lista creada con apps:", ul);

// 1.7 Elimina todos los nodos con la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll(".fn-remove-me");
elementsToRemove.forEach(el => {
  el.remove();
  console.log("1.7 Elemento eliminado:", el);
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div
const allDivs = document.querySelectorAll("body > div"); // Se seleccionan los div directos del body
if (allDivs.length >= 2) {
  const middleP = document.createElement("p");
  middleP.textContent = "Voy en medio!";
  allDivs[0].insertAdjacentElement("afterend", middleP); // Se inserta justo después del primer div
  console.log("1.8 Párrafo insertado entre divs:", middleP);
}

// 1.9 Inserta p con el texto 'Voy dentro!' en cada div con clase .fn-insert-here
const insertDivs = document.querySelectorAll("div.fn-insert-here");
insertDivs.forEach(div => {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
  console.log("1.9 Párrafo insertado dentro del div:", div);
});
