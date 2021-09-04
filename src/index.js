console.log('%c HI', 'color: firebrick');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetchImages();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages(){
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(json => {
        addImages(json)
    });
    
}

function addImages(object){
    
     image = object["message"]
     debugger
    const hElement = document.getElementById("dog-image-container");
    for (const image of object){
        hElement.innerHTML += 
        `
        <img src=${image}>
        `

   }

}
