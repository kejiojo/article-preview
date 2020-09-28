

const onClick = () => {
    $('.show').fadeToggle();
   var popUp = document.querySelector('#popup');
   popUp.classList.toggle('show');
}

document.querySelector('.share-div').addEventListener('click', onClick);