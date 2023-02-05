const nombre = 'Sergio';
const apellidos = 'Osorio Angel';

// Ejemplo template string
const full = `${getSaludo()}, ${nombre} ${apellidos}, número ${5*5}`;
console.log(full);

function getSaludo(){
    return 'Hola Mundo';
}
