const fs = require('fs');

const contenido = 'Este es el contenido del archivo';

fs.writeFile('archivo.txt', contenido, (error) => {
  if (error) {
    console.error('Error al crear el archivo:', error);
  } else {
    console.log('Archivo creado exitosamente');
  }
});