import { getHeroesById } from "./08-impo-expo";


// // resolve -> En caso de éxito
// // reject -> En caso de fracaso
// const promesa = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         const data = getHeroesById(2);
//         resolve(data);
//         // reject('No se pudo encontrar el heroe');

//     }, 2000);
// });

// // .then -> éxito
// // .catch -> error
// // .finally -> depués del .then o .catch

// promesa.then( (data)=>{
//     console.log('Heroe', data);
// }).catch((error)=>{
//     console.warn(error);
// })


const getHeroeByIdAsync = (id)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const data = getHeroesById(id);
            if (data) {
                resolve(data);
            } else {
                reject('No se encontró el heroe')
            }
        }, 2000);
    });
};

getHeroeByIdAsync(2)
    .then(heroe => {
        console.log('Heroe', heroe);
    })
    .catch((error)=>{
        console.warn(error)
    });

