const person = {
    name: 'Sergio',
    age: 21,
    pass: 'alo123'
};

const {name, age:edad, pass} = person;

console.log(name);
console.log(edad);
console.log(pass);

const usecontext = ({name, age, pass, range='Capitan'})=>{
    return {
        nameKey: pass,
        age2: age,
        location: {
            lat: 123,
            lng: 456
        }
    }
}

const {nameKey, age2, location:{lat,lng}} = usecontext(person);

console.log(nameKey, age2);
console.log(lat, lng);

