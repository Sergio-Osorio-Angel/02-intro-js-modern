const apiKey = 'YVUEBToya77CxWfY9LnQOQYfh6Rc6BME';
const urlAPI = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;



const getImagen = async()=> {
    try {
        const response = await fetch(urlAPI);
        const {data} = await response.json();
    
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);   
    } catch (error) {
        // Manejo del error
        console.warn(error)
    }
}

getImagen();