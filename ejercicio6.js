// Se selecciona el primer elemento del DOM que tenga la clase 'fn-remove-me'
const elementToRemove = document.querySelector('.fn-remove-me');

// Verifica si el elemento existe antes de intentar eliminarlo
if (elementToRemove) {
  // Elimina el elemento del DOM
  elementToRemove.remove();

  // Muestra mensaje de confirmación en consola
  console.log('✅ Elemento con clase .fn-remove-me eliminado correctamente.');
} else {
  // En caso de que el elemento no exista, se informa por consola
  console.log('⚠️ No se encontró ningún elemento con la clase .fn-remove-me.');
}
