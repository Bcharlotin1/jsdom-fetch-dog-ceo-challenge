console.log('%c HI', 'color: firebrick');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetchImages();
    fetchBreeds();
});

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages(){
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(json => {
        addImages(json)
    });
    
}

function fetchBreeds(){
    fetch(`${breedUrl}`)
    .then(response => response.json())
    .then(json => {
        addBreed(json)
    });
    
}

function addImages(object){
    imgObj = object["message"]
    const hElement = document.getElementById("dog-image-container");
    for (const image of imgObj){
        hElement.innerHTML += 
        `
        <img src=${image}>
        `
   }

}


function addBreed(object){
   
    const nameObj = Object.keys(object["message"])
    
    const hElement = document.getElementById("dog-breeds");
    for (const name of nameObj){
       hElement.innerHTML += 
       `
       <li class ="dog-text"> ${name} </li> <br>
       `
    //    document.getElementById("dog-text").style.color = 'red'
  }

}