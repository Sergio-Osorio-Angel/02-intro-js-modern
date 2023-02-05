const apiKey = 'YVUEBToya77CxWfY9LnQOQYfh6Rc6BME';
const urlAPI = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(urlAPI);

// Promesas encadenadas
peticion
    .then(response => response.json())
    .then(({data}) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);