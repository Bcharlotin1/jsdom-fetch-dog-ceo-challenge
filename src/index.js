console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages(){
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(json => json);

    
}

function addImages(){
    const images = fetchImages();

    element = document.getElementById("breed-dropdown");

    for(const option of element){
        for(const image of images){
            option.innerHTML += `
            <img src=${image}>
            
            `
        }
        
    }
}
