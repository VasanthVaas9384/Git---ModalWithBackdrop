const modalEleRef = document.getElementById('add-modal');
const showModalbtnRef = document.getElementById('showModal');
const closeModalbtnRef = modalEleRef.querySelector('#close-modal');
const backdropEleRef = document.getElementById('backdrop');

//show/hide overlay using js toggle class
const toggleBackdrop = () => {
    backdropEleRef.classList.toggle('visible');
}

const toggleModalHandler = (e) => {
    modalEleRef.classList.toggle('visible');
    toggleBackdrop();
}
 

showModalbtnRef.addEventListener('click', toggleModalHandler);

closeModalbtnRef.addEventListener('click', toggleModalHandler);



backdropEleRef.addEventListener('click', toggleModalHandler)