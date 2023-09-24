const imagesArray = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
]
const imagesContainer = document.querySelector('.images-lf');
const nextButton = document.querySelector('.bottom-lf');
const prevButton = document.querySelector('.up-lf');
const thumbNail = document.querySelector('.thumb-nail-lf');

let counterImg = 0;
let flagLeast = 0;
let flagFirst = 1;
let flagResetNext = 0;
let flagResetPrev = 0;


imagesContainer.innerHTML = '';
thumbNail.innerHTML = '';

for(let i = 0; i < imagesArray.length; i++){
  const img = imagesArray[i];
  imagesContainer.innerHTML += `
  <img src="${img}" class="item d-none" alt="0${i + 1}" >
  `;
  thumbNail.innerHTML += `
  <div class="img-card-lf">
    <img src="${img}" alt="${i + 1}">
  </div>
  `;
}

const itemsCollection = document.getElementsByClassName('item');
const thumbCollection = document.getElementsByClassName('img-card-lf');

itemsCollection[counterImg].classList.remove('d-none');
thumbCollection[counterImg].classList.add('active-lf');

nextButton.addEventListener('click', nextImg);
prevButton.addEventListener('click', prevImg);

// prevButton.classList.add('d-none');


function nextImg (){
  flagFirst = 0;

  if(flagLeast){
    //console.log('sono entrato nell\' if 1');
    itemsCollection[counterImg].classList.add('d-none');
    thumbCollection[counterImg].classList.remove('active-lf');
    counterImg = 0;
    thumbCollection[counterImg].classList.add('active-lf');
    itemsCollection[counterImg].classList.remove('d-none');
    
    flagLeast = 0;
    flagResetNext = 1;
    flagFirst = 1;
  }
  // prevButton.classList.remove('d-none');
  if(!flagResetNext){
    //console.log('sono entrato nell\' if 2');
    itemsCollection[counterImg].classList.add('d-none');
    thumbCollection[counterImg].classList.remove('active-lf');
    
    counterImg++;

    thumbCollection[counterImg].classList.add('active-lf');
    itemsCollection[counterImg].classList.remove('d-none');
  }else{
    flagResetNext = 0;
  }
  
  

  if(counterImg === itemsCollection.length - 1){
    // nextButton.classList.add('d-none');
    flagLeast = 1;
  }

  //console.log('c: '+counterImg,'fL: ' + flagLeast, 'fRN: ' + flagResetNext,'fF: ' + flagFirst, 'fRP: ' + flagResetPrev);
}

function prevImg () {
  if(flagLeast){
    flagLeast = 0;
  }

  if(flagFirst){
    itemsCollection[counterImg].classList.add('d-none');
    thumbCollection[counterImg].classList.remove('active-lf');
    counterImg = itemsCollection.length - 1;
    thumbCollection[counterImg].classList.add('active-lf');
    itemsCollection[counterImg].classList.remove('d-none');
    
    flagFirst = 0;
    flagResetPrev = 1;
    flagLeast = 1;
  }

  // nextButton.classList.remove('d-none');

  if(!flagResetPrev){
    //console.log('sono entrato nell\' if 2');
    itemsCollection[counterImg].classList.add('d-none');
    thumbCollection[counterImg].classList.remove('active-lf');
    
    counterImg--;

    thumbCollection[counterImg].classList.add('active-lf');
    itemsCollection[counterImg].classList.remove('d-none');
  }else{
    flagResetPrev = 0;
  }

  if(counterImg === 0){
    // prevButton.classList.add('d-none');
    flagFirst = 1;
  }

  //console.log('c: '+counterImg,'fL: ' + flagLeast, 'fRN: ' + flagResetNext,'fF: ' + flagFirst, 'fRP: ' + flagResetPrev);
}



