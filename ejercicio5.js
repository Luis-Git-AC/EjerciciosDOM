// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

// const albums = [
//   "De Mysteriis Dom Sathanas",
//   "Reign of Blood",
//   "Ride the Lightning",
//   "Painkiller",
//   "Iron Fist",
// ];

// Array con los nombres de los álbumes que se van a insertar en el HTML
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  // Se crea el elemento <ul> que contendrá todos los <li>
  const ul = document.createElement('ul');
  
  // Se recorre el array de álbumes
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
  
    // Se crea un nuevo <li> para cada álbum
    const li = document.createElement('li');
  
    // Se asigna el texto del álbum al contenido del <li>
    li.textContent = album;
  
    // Se añade el <li> al <ul>
    ul.appendChild(li);
  
    // Mensaje en consola para confirmar que el álbum fue insertado
    console.log(`✅ Álbum insertado: ${album}`);
  }
  
  // Se añade la lista completa <ul> al <body> del documento
  document.body.appendChild(ul);
  
  // Mensaje final indicando que la lista se ha insertado completamente
  console.log("🎉 Lista de álbumes insertada en el HTML.");
  