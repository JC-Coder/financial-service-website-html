let modal = document.querySelector('#modal');
let closeModalBtn = modal.querySelector('.close')
let modalToggle = document.querySelectorAll('.modalToggle');


closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle('closed')
})


modalToggle.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.toggle('closed');
        item.parentElement.reset();
    })
})
