// Forma 1
function saludar1(name) {
    return `Hola ${name}`
}

// Forma 2.1 - funcion normal con parametro
const saludar2 = function(name){
    return `Hola ${name}`
}

// Forma 2.2 - función de flecha con parametro
const saludar3 = (name)=> {
    return `Hola ${name}`
}

// Forma 2.3 - operación de 1 linea 1 retorno
const saludar4 = (name)=> `Hola ${name}`;

// Forma 2.4 - operación de 1 linea 1 retorno\
// Sin parametros
const saludar5 = ()=> `Hola Mundo`;

console.log(saludar4('Sergio'));



const getUser = () => {
    return {
        uid:'ABCD',
        username:'Sergio_OA'
    }
}
const getUser2 = () => ({uid:'ABCD',username:'Sergio_OA'}) 

const getUsuarioActivo = (nombre) => ({uid:'ABCD',username:nombre});
console.log('Sergiño');