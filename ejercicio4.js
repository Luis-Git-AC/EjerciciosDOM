// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

// 1.1 Evento 'click' que muestra información del evento en consola
const button = document.getElementById('btnToClick');

button.addEventListener('click', function(event) {
  console.log('🖱️ Has hecho clic en el botón');
  console.log('📋 Información del evento:', event);
});


// 1.2 Evento 'focus' que muestra el valor del input al recibir foco
const focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', function(event) {
  console.log('🎯 Input con clase "focus" recibió foco');
  console.log('📥 Valor actual del input:', event.target.value);
});


// 1.3 Evento 'input' que muestra el valor a medida que se escribe
const valueInput = document.querySelector('.value');

valueInput.addEventListener('input', function(event) {
  console.log('⌨️ Escribiendo en el input con clase "value"');
  console.log('✏️ Valor actual:', event.target.value);
});
