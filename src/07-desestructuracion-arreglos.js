const personajes = ['Goku','Vegeta','Trunks'];

// Se desestructuran por posiciones
// No por los valores que contiene
const [ p1, , p3 ] = personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABCD',1234]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const usestate = (valor) => {
    return [valor, ()=>{console.log('Hola mundo use')}]
}

const [nombre, setNombre] = usestate('Goku');
console.log(nombre, setNombre());