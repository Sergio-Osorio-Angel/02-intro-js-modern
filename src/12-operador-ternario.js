const activo = true;
const publicado = true;
let msg = '';

// activo ? msg = 'Activo' : msg = 'Inactivo'
(activo  && publicado) ? msg = 'Correcto' : msg = 'Incorrecto'

console.log(msg);